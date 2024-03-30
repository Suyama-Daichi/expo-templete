import async from 'async';
import crypto from 'crypto';
import { Request, Response, NextFunction } from 'express';
import { Config } from '../config/config';

/** Firebaseの使用 */
const admin = require('firebase-admin');
admin.initializeApp({ credential: admin.credential.cert(Config.foursquareAuthConfig.firebase) });
const db = admin.firestore();

/** foursquareライブラリの使用 */
const nodeFoursquare = require('node-foursquare');
const Foursquare = nodeFoursquare(Config.foursquareAuthConfig);

/** UUIDを保持 */
let uuid = '';

/**
 * GET /api/auth
 * アクセストークン取得
 */
export let getLogin = (req: any, res: Response) => {
  const url = Foursquare.getAuthClientRedirectUrl();
  uuid = req.query.uuid;
  res.redirect(302, url);
};

/**
 * GET /callback
 * アクセストークンの取得
 */
export let getAccesstoken = (req: Request, res: Response) => {
  const code: string = req.query.code;
  /** アクセストークンを取得 */
  Foursquare.getAccessToken(
    {
      code,
    },
    (error?: Error, accessToken?: string) => {
      if (error) {
        res.send(`An error was thrown: ${error.message}`);
      } else if (!accessToken) {
        res.send(`No access token was provided`);
      } else {
        // クライアントのOAuthトークンをCloudFireStoreに保管
        const docRef = db.collection('users');
        docRef.doc(uuid).set({
          accessToken: accessToken
        });
        // homeにリダイレクト
        res.redirect('http://localhost:4200/home');
      }
    }
  );
};

/**
 * GET /api/checkauth
 * 認証チェック
 */
export let checkauth = (req: Request, res: Response) => {
  const uuid = req.query.uuid;
  const docRef = db.collection('users');
  // CloudFireStoreにコレクションがあるか
  docRef.doc(uuid).get()
    .then((doc: any) => {
      if (doc.exists) {
        res.send(true);
      } else {
        console.log('未承認のユーザー');
        res.send(false);
      }
    });
};