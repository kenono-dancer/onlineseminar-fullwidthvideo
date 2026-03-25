---
title: "確定申告 スプレッドシートで使える関数 UNIQUE関数  SUMIF関数"
description: "昨年まで、MoneyForwardとe-Taxの合わせ技で確定申告をしてきましたが、今年はGoogleスプレッドシートとe-Taxで確定申告をしようしています。 というのもここ最近、Googleスプレッドシートの便利さにどっぷりハマって、EXCELから遠ざかっているのが主な理由。 ※今回ご紹介するUNIQUE関数 SUMIF関数は共に、スプレッドシート、EXCEL両方で使えます。 UNIQUE関数"
pubDate: "2020-02-21T00:29:26"
updatedDate: "2020-02-21T19:17:48"
heroImage: "/assets/images/B73786C4-12DD-4208-AC83-073F24E40E59_3.jpeg"
categories: ["確定申告"]
tags: []
author: "itxdancer"
draft: false
---
昨年まで、MoneyForwardとe-Taxの合わせ技で確定申告をしてきましたが、今年はGoogleスプレッドシートとe-Taxで確定申告をしようしています。 というのもここ最近、Googleスプレッドシートの便利さにどっぷりハマって、EXCELから遠ざかっているのが主な理由。 ※今回ご紹介するUNIQUE関数 SUMIF関数は共に、スプレッドシート、EXCEL両方で使えます。 
## UNIQUE関数は、指定した範囲にある重複データを削除する関数
確定申告でのおすすめの使い方 ダウンロードしたクレジットカードの明細のデータを、旅費交通費、新聞図書費、研修費などと仕分けした上で、unique関数で指定すると一覧が作りやすくなります。 ※オートコンプリート機能で明細をソートしておくと、Amazonなどお店ごとに並んでくれるので、仕分け（コピペ）しやすくなります。
 
### UNIQUE関数の使い方は、=unique(B1:B10)
=unique(B1:B10) 重複を削除したい範囲を指定するだけ。 非常にかんたんです。 数式を入力したセルの下に、ズラッと並んでゆきます。 
[![](/assets/images/unique-function-644x778_3.jpg)](<https://itxdancer.com/tax_returns-spreadsheet-unique_sumif/unique-function/>)
   
## SUMIF関数は、”指定した範囲”について”条件”にあう行の”別の指定した数”を合計する関数
確定申告でのおすすめの使い方 クレジットカードの明細で仕分けした列を“指定した範囲に”、UNIQUE関数で出した項目の一覧を“条件”に指定して、クレジットカード明細の各金額の列を
  SUMIF関数の使い方は、=SUMIF(B$5:B&18,B1,C&5:C&18) B5:B&18の範囲にあるデータとB1のデータを比較し、 B1に先程出した文字列と合致したら、 合計を計算式を入れた場所に表示する。 
以下の図のように複数の項目について、合計を出したいときは、対象のの範囲がずれないように、＄を使いましょう。 =SUMIF(B$5:B&18,B1,C&5:C&18)
[![](/assets/images/SUMIF-SAMPLE-2-644x641_3.jpg)](<https://itxdancer.com/tax_returns-spreadsheet-unique_sumif/sumif-sample-3/>)
クレジットのカードの明細をcsv出力してしまえば、簡単に設定できちゃいます。
## 関係のありそうなコンテンツ
https://itxdancer.com/tech/google-spreadsheet-importrange/ https://itxdancer.com/tax_returns-spreadsheet-unique_sumif/
