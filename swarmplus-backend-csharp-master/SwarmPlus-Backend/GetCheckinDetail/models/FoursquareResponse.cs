using System;
using System.Collections.Generic;
using System.Text;

namespace GetCheckinDetail.models
{
    public class ResponseFromFoursquare
    {
        public Meta meta { get; set; }
        public Notifications[] notifications { get; set; }
        public Response response { get; set; }
    }

    public class Response
    {
        /// <summary>
        /// チェックインリスト
        /// </summary>
        public Items checkins { get; set; }
        /// <summary>
        /// チェックインの詳細
        /// </summary>
        public CheckinInfo checkin { get; set; }
        public Photos photos { get; set; }
    }

    public class Items
    {
        /// <summary>
        /// チェックイン数
        /// </summary>
        public int count { get; set; }
        /// <summary>
        /// チェックインデータ本体
        /// </summary>
        public CheckinInfo[] items { get; set; }
    }

    public class CheckinInfo
    {
        /// <summary>
        /// チェックインID
        /// </summary>
        public string id { get; set; }
        /// <summary>
        /// チェックイン時刻
        /// </summary>
        public int createdAt { get; set; }
        /// <summary>
        /// データの型
        /// </summary>
        public string type { get; set; }
        public Entities[] entities { get; set; }
        /// <summary>
        /// シャウト
        /// </summary>
        public string shout { get; set; }
        /// <summary>
        /// タイムゾーンオフセット
        /// </summary>
        public int timeZoneOffset { get; set; }
        public UserInfo[] with { get; set; }
        /// <summary>
        /// チェックインの編集可能期限
        /// </summary>
        public long editableUntil { get; set; }
        /// <summary>
        /// べニュー情報
        /// </summary>
        public Venue venue { get; set; }
        /// <summary>
        /// いいねした人の情報
        /// </summary>
        public Likes likes { get; set; }
        public bool like { get; set; }
        /// <summary>
        /// ステッカー情報
        /// </summary>
        public Sticker sticker { get; set; }
        /// <summary>
        /// メイヤーかどうか
        /// </summary>
        public bool isMayor { get; set; }
        /// <summary>
        /// 写真
        /// </summary>
        public Photos photos { get; set; }
        public Posts posts { get; set; }
        public Comments comments { get; set; }
        /// <summary>
        /// チェックイン元
        /// </summary>
        public Source source { get; set; }
        /// <summary>
        /// チェックインしたユーザー情報
        /// </summary>
        public UserInfo user { get; set; }
        /// <summary>
        /// 編集できるか(?)
        /// </summary>
        public bool locked { get; set; }
        /// <summary>
        /// Swarm公式のチェックイン詳細ページURL
        /// </summary>
        public string checkinShortUrl { get; set; }
        public Score score { get; set; }
    }

    public class Score
    {
        /// <summary>
        /// 獲得コイン数
        /// </summary>
        public int total { get; set; }
        public Scores[] scores { get; set; }

        public class Scores
        {
            public string icon { get; set; }
            public string message { get; set; }
            public int points { get; set; }
        }
    }

    public class Comments
    {
        /// <summary>
        /// コメント数
        /// </summary>
        public int count { get; set; }
        public CommentsItems[] items { get; set; }
    }

    public class Posts
    {
        public int count { get; set; }
        public int textCount { get; set; }
    }

    public class Entities
    {
        public int[] indices { get; set; }
        public string type { get; set; }
        public string id { get; set; }
    }

    public class Sticker
    {
        /// <summary>
        /// ステッカーID
        /// </summary>
        public string id { get; set; }
        /// <summary>
        /// ステッカー名
        /// </summary>
        public string name { get; set; }
        public Image image { get; set; }
        /// <summary>
        /// ステッカーのタイプ
        /// </summary>
        public string stickerType { get; set; }
        public Group group { get; set; }
        public PickerPosition pickerPosition { get; set; }
        public string teaseText { get; set; }
        public string unlockText { get; set; }
        public string bonusText { get; set; }
        public int points { get; set; }
        public string bonusStatus { get; set; }

        public class Group
        {
            public string name { get; set; }
            public int index { get; set; }
        }

        public class PickerPosition
        {
            public int page { get; set; }
            public int index { get; set; }

        }
    }

    public class Image
    {
        public string prefix { get; set; }
        public int[] sizes { get; set; }
        public string name { get; set; }
    }

    public class Notifications
    {
        /// <summary>
        /// レスポンスのタイプ
        /// </summary>
        public string type { get; set; }
        public Item item { get; set; }
    }

    public class Item
    {
        /// <summary>
        /// 未読数
        /// </summary>
        public int unreadCount { get; set; }
    }

    public class Meta
    {
        /// <summary>
        /// レスポンスコード
        /// </summary>
        public int code { get; set; }
        /// <summary>
        /// リクエストID
        /// </summary>
        public string requestId { get; set; }
    }

    public class CommentsItems
    {
        public string id { get; set; }
        public int createdAt { get; set; }
        public UserInfo user { get; set; }
        /// <summary>
        /// コメント本文
        /// </summary>
        public string text { get; set; }
    }

    public class Venue
    {
        /// <summary>
        /// べニューID
        /// </summary>
        public string id { get; set; }
        /// <summary>
        /// べニュー名
        /// </summary>
        public string name { get; set; }
        /// <summary>
        /// 位置情報
        /// </summary>
        public Location location { get; set; }
        public Categories[] categories { get; set; }
        public bool @private { get; set; }
    }
    public class UserInfo
    {
        public string id { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
        public string gender { get; set; }
        public string relationship { get; set; }
        public Icon_Photo photo { get; set; }
        public string visibility { get; set; }
    }

    public class Location
    {
        /// <summary>
        /// 住所
        /// </summary>
        public string address { get; set; }
        /// <summary>
        /// 親施設
        /// </summary>
        public string crossStreet { get; set; }
        public bool isFuzzed { get; set; }
        /// <summary>
        /// 緯度
        /// </summary>
        public double lat { get; set; }
        /// <summary>
        /// 経度
        /// </summary>
        public double lng { get; set; }
        public LabeledLatLngs[] labeledLatLngs { get; set; }
        /// <summary>
        /// 郵便番号
        /// </summary>
        public string postalCode { get; set; }
        /// <summary>
        /// 国コード
        /// </summary>
        public string cc { get; set; }
        /// <summary>
        /// 市区町村
        /// </summary>
        public string city { get; set; }
        /// <summary>
        /// 国
        /// </summary>
        public string country { get; set; }
        /// <summary>
        /// フォーマットされた住所
        /// </summary>
        public string[] formattedAddress { get; set; }
    }

    public class LabeledLatLngs
    {
        /// <summary>
        /// ラベル
        /// </summary>
        public string label { get; set; }
        /// <summary>
        /// 緯度
        /// </summary>
        public double lat { get; set; }
        /// <summary>
        /// 経度
        /// </summary>
        public double lng { get; set; }
    }

    public class Categories
    {
        /// <summary>
        /// カテゴリID
        /// </summary>
        public string id { get; set; }
        /// <summary>
        /// カテゴリ名
        /// </summary>
        public string name { get; set; }
        /// <summary>
        /// カテゴリ名(複数形)
        /// </summary>
        public string pluralName { get; set; }
        /// <summary>
        /// カテゴリ名(単数形)
        /// </summary>
        public string shortName { get; set; }
        /// <summary>
        /// カテゴリアイコン情報
        /// </summary>
        public Icon_Photo icon { get; set; }
        /// <summary>
        /// 主カテゴリかどうか
        /// </summary>
        public bool primary { get; set; }
    }

    public class Icon_Photo
    {
        public string prefix { get; set; }
        public string suffix { get; set; }
    }

    public class Likes
    {
        public int count { get; set; }
        public Groups[] groups { get; set; }
        public string summary { get; set; }
    }

    public class Groups
    {
        public string type { get; set; }
        public int count { get; set; }
        public Items[] items { get; set; }

        public class Items
        {
            /// <summary>
            /// ユーザID
            /// </summary>
            public int id { get; set; }
            /// <summary>
            /// ユーザ名
            /// </summary>
            public string firstName { get; set; }
            /// <summary>
            /// 性別
            /// </summary>
            public string gender { get; set; }
            /// <summary>
            /// 関係性
            /// </summary>
            public string relationship { get; set; }
            public Icon_Photo photo { get; set; }
        }
    }
    public class Photos
    {
        public int count { get; set; }
        public Items[] items { get; set; }
        public int dupesRemoved { get; set; }
        //public dynamic layout { get; set; }
        public class Items
        {
            public string id { get; set; }
            /// <summary>
            /// アップロード日時
            /// </summary>
            public int createdAt { get; set; }
            /// <summary>
            /// アップロード元
            /// </summary>
            public Source source { get; set; }
            public string prefix { get; set; }
            public string suffix { get; set; }
            public int width { get; set; }
            public int height { get; set; }
            public bool demoted { get; set; }
            public UserInfo user { get; set; }
        }
    }

    public class Source
    {
        public string name { get; set; }
        public string url { get; set; }
    }
}
