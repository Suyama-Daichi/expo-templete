'use strict';

import request from 'request';
import { Response, Request, NextFunction } from 'express';
import { Config } from '../config/config';

/** Firebaseの使用 */
const admin = require('firebase-admin');
const db = admin.firestore();

// 共通のヘッダー情報
const headers = {
  'Accept-Language': 'ja'
};

/**
 * 共通リクエスト
 * @param uuid UUID
 * @param url リクエスト先のURL
 * @param param オプションパラメータ
 */
const commonGetRequest = (uuid: string, url: string, param: {}) => {
  // 1. Promiseを返す
  // 2. returnする代わりにresolve()する
  // 3. Promise内の処理が終わったらcommonProcess().then(result)で処理の続きをおこなえる(resultはresolveの引数)
  return new Promise((resolve, reject) => {
    // コレクションを読み出し
    const docRef = db.collection('users');
    // uuidをキーにアクセストークン取得し、APIを叩く
    docRef.doc(uuid).get()
      .then((doc: any) => {
        /** 共通パラメータ */
        const commonParam = {
          oauth_token: doc.data().accessToken,
          v: Config.foursquareAuthConfig.foursquare.version,
        };
        request.get({
          url: url,
          qs: Object.assign(commonParam, param), // 共通パラメータとオプションパラメータを結合
          json: true,
          headers: headers
        }, (error, response, body) => {
          resolve(body.response);
        });
      });
  });
};

/**
 * GET /api/topCheckin100
 * トップチェックイン100取得
 */
export let topCheckin100 = (req: Request, res: Response) => {
  commonGetRequest(req.query.uuid, 'https://api.foursquare.com/v2/users/self/venuehistory', { limit: 100 })
    .then(result => res.json(result));
};

/**
 * GET /api/checkinParDate
 * 日付指定検索
 */
export let checkinParDate = (req: Request, res: Response) => {
  commonGetRequest(req.query.uuid, 'https://api.foursquare.com/v2/users/self/checkins', {afterTimestamp: req.query.startDate, beforeTimestamp: req.query.endDate})
    .then(result => res.json(result));
};
