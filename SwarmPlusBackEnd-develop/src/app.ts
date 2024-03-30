import express from 'express';
import bodyParser from 'body-parser';
import logger from './util/logger';
import path from 'path';
import bluebird from 'bluebird';

// Controllers (route handlers)
import * as authController from './controllers/auth';
import * as foursquareAPIController from './controllers/foursquareAPI';

// Create Express server
const app = express();

// Express configuration
app.set('port', process.env.PORT || 3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
/** クロスドメイン設定 */
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

/** OAuth2認証エンドポイント */
app.get('/api/auth', authController.getLogin);

/** コールバックエンドポイント */
app.get('/api/callback', authController.getAccesstoken);

/** 認証チェックエンドポイント */
app.get('/api/checkauth', authController.checkauth);

/**
 * トップチェックイン100取得エンドポイント
 * https://api.foursquare.com/v2/users/USER_ID/venuehistory
 */
app.get('/api/topCheckin100', foursquareAPIController.topCheckin100);

/**
 * 日付指定検索
 * https://api.foursquare.com/v2/users/USER_ID/checkins
 */
app.get('/api/checkinParDate', foursquareAPIController.checkinParDate);

export default app;