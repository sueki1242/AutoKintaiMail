# AutoKintaiMail

電車遅延や体調不良などで突然遅刻・休暇連絡が必要な際に、

それらのメール送信を1タップで行ってくれるGmailのadd-onです。

## Prerequisites

- node 4.7 or later
- [clasp](https://github.com/google/clasp)
- `clasp login`
- [Google Apps Script設定画面](https://script.google.com/home/usersettings)で「GoogleAppsScriptAPI」をonにする

## How to use

- `clasp create AutoKintaiMail`
- 以下のファイルの氏名やメール宛先を編集
    - code.js
    - train_delay_mail.html
    - ill_leave_mail.html
- `clasp push`
- [ブラウザ上](https://script.google.com/home/)でGASの`AutoKintaiMail`プロジェクトを開く
    - `SendTrainDelayMail`を実行→メール送信のスクリプト実行を承認
    - 「公開」→「マニフェストから配置」→「Get Id」で`Deployment id`をコピー
- gmailの設定画面で「アドオン」タブを開く
    - デベロッパーアドオンを有効化
    - 先程コピーした`Deployment id`を貼付けてインストール

## TODOs

- インストールの簡易化
- 名前・メール送信先を設定可能にする
    - 現状は変更のたびにアドオン側の更新が必要