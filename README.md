# Grannkommuner i Sverige - Neighboring municipalities in Sweden

> Grannkommun: _som gränsar till (eller ligger i närheten av) en viss kommun_ >[Wiktionary](https://sv.wiktionary.org/wiki/grannkommun)

En lista över svenska kommuner som ligger intill varandra och alltså är grannar, även kallat närliggande eller intilliggande kommuner.

## Method

Based on the dataset [Digital Border Information from SCB](https://www.scb.se/hitta-statistik/regional-statistik-och-kartor/regionala-indelningar/digitala-granser/). Extracted using [QGIS](https://qgis.org/) and the method described in [Find Neighbor Polygons using Summary Aggregate Function in QGIS](https://spatialthoughts.com/2019/05/23/neighbor-polygons-aggregate-qgis/).

Transformed using the code provided in this repository.

Cross referenced against the SCB map [Karta över Sveriges kommuner enligt indelning 2010-01-01](https://www.scb.se/contentassets/1e02934987424259b730c5e9a82f7e74/kommunkarta09.pdf)

The [list of municipality codes](municipalities.js) (for example `0180` Stockholm), is based on the SCB list [Län och kommuner i kodnummerordning](https://www.scb.se/hitta-statistik/regional-statistik-och-kartor/regionala-indelningar/lan-och-kommuner/lan-och-kommuner-i-kodnummerordning/)

## Definitions and limitations

⚠️ Municipalities covering an entire island, such as Tjörn, Gotland, and Ekerö, does not have any neighboring municipalities according to the method used. This may or may not be in line with your intended use case.

## List of neighboring municipalities in Sweden

💁‍ Computer readable [versions (JSON) are found in `/output`](output/)

<!-- prettier-ignore -->
| Municipality (Kommun) | Neighboring municipalities (Grannkommuner)
| -- | --
Upplands Väsby | Vallentuna, Järfälla, Upplands-Bro, Täby, Sollentuna, Sigtuna
Vallentuna | Upplands Väsby, Österåker, Täby, Norrtälje, Sigtuna
Österåker | Vallentuna, Täby, Vaxholm, Norrtälje
Värmdö | Nacka
Järfälla | Upplands Väsby, Upplands-Bro, Sollentuna, Stockholm
Ekerö |
Huddinge | Botkyrka, Haninge, Tyresö, Stockholm
Botkyrka | Huddinge, Salem, Haninge, Södertälje, Nynäshamn
Salem | Botkyrka, Södertälje
Haninge | Huddinge, Botkyrka, Tyresö, Nynäshamn
Tyresö | Huddinge, Haninge, Stockholm, Nacka
Upplands-Bro | Upplands Väsby, Järfälla, Sigtuna, Håbo
Nykvarn | Södertälje, Gnesta, Strängnäs
Täby | Upplands Väsby, Vallentuna, Österåker, Danderyd, Sollentuna
Danderyd | Täby, Sollentuna, Stockholm, Solna
Sollentuna | Upplands Väsby, Järfälla, Täby, Danderyd, Stockholm, Sundbyberg, Solna
Stockholm | Järfälla, Huddinge, Tyresö, Danderyd, Sollentuna, Nacka, Sundbyberg, Solna
Södertälje | Botkyrka, Salem, Nykvarn, Gnesta, Trosa
Nacka | Värmdö, Tyresö, Stockholm
Sundbyberg | Sollentuna, Stockholm, Solna
Solna | Danderyd, Sollentuna, Stockholm, Sundbyberg
Lidingö |
Vaxholm | Österåker
Norrtälje | Vallentuna, Österåker, Sigtuna, Knivsta, Uppsala, Östhammar
Sigtuna | Upplands Väsby, Vallentuna, Upplands-Bro, Norrtälje, Håbo, Knivsta, Uppsala
Nynäshamn | Botkyrka, Haninge
Håbo | Upplands-Bro, Sigtuna, Knivsta, Uppsala, Enköping
Älvkarleby | Tierp, Gävle
Knivsta | Norrtälje, Sigtuna, Håbo, Uppsala
Heby | Tierp, Uppsala, Enköping, Sala, Avesta, Gävle, Sandviken
Tierp | Älvkarleby, Heby, Uppsala, Östhammar, Gävle
Uppsala | Norrtälje, Sigtuna, Håbo, Knivsta, Heby, Tierp, Enköping, Östhammar
Enköping | Håbo, Heby, Uppsala, Västerås, Sala
Östhammar | Norrtälje, Tierp, Uppsala
Vingåker | Katrineholm, Finspång, Örebro
Gnesta | Nykvarn, Södertälje, Nyköping, Flen, Strängnäs, Trosa
Nyköping | Gnesta, Oxelösund, Flen, Katrineholm, Trosa, Norrköping
Oxelösund | Nyköping
Flen | Gnesta, Nyköping, Katrineholm, Eskilstuna, Strängnäs
Katrineholm | Vingåker, Nyköping, Flen, Eskilstuna, Finspång, Norrköping
Eskilstuna | Flen, Katrineholm, Strängnäs, Kungsör, Arboga
Strängnäs | Nykvarn, Gnesta, Flen, Eskilstuna
Trosa | Södertälje, Gnesta, Nyköping
Ödeshög | Boxholm, Vadstena, Mjölby, Jönköping, Tranås
Ydre | Kinda, Boxholm, Aneby, Eksjö, Tranås, Vimmerby
Kinda | Ydre, Boxholm, Åtvidaberg, Linköping, Västervik, Vimmerby
Boxholm | Ödeshög, Ydre, Kinda, Linköping, Mjölby, Tranås
Åtvidaberg | Kinda, Valdemarsvik, Linköping, Söderköping, Västervik
Finspång | Vingåker, Katrineholm, Linköping, Norrköping, Motala, Hallsberg, Örebro
Valdemarsvik | Åtvidaberg, Söderköping, Västervik
Linköping | Kinda, Boxholm, Åtvidaberg, Finspång, Norrköping, Söderköping, Motala, Mjölby
Norrköping | Nyköping, Katrineholm, Finspång, Linköping, Söderköping
Söderköping | Åtvidaberg, Valdemarsvik, Linköping, Norrköping
Motala | Finspång, Linköping, Vadstena, Mjölby, Hallsberg, Askersund
Vadstena | Ödeshög, Motala, Mjölby
Mjölby | Ödeshög, Boxholm, Linköping, Motala, Vadstena
Aneby | Ydre, Jönköping, Nässjö, Eksjö, Tranås
Gnosjö | Gislaved, Vaggeryd, Värnamo
Mullsjö | Habo, Jönköping, Ulricehamn, Tidaholm, Falköping
Habo | Mullsjö, Jönköping, Hjo, Tidaholm
Gislaved | Gnosjö, Vaggeryd, Jönköping, Värnamo, Ljungby, Hylte, Falkenberg, Tranemo, Svenljunga
Vaggeryd | Gnosjö, Gislaved, Jönköping, Nässjö, Värnamo, Sävsjö
Jönköping | Ödeshög, Aneby, Mullsjö, Habo, Gislaved, Vaggeryd, Nässjö, Tranås, Tranemo, Ulricehamn
Nässjö | Aneby, Vaggeryd, Jönköping, Sävsjö, Vetlanda, Eksjö
Värnamo | Gnosjö, Gislaved, Vaggeryd, Sävsjö, Alvesta, Ljungby
Sävsjö | Vaggeryd, Nässjö, Värnamo, Vetlanda, Alvesta, Växjö
Vetlanda | Nässjö, Sävsjö, Eksjö, Uppvidinge, Växjö, Högsby, Hultsfred
Eksjö | Ydre, Aneby, Nässjö, Vetlanda, Hultsfred, Vimmerby
Tranås | Ödeshög, Ydre, Boxholm, Aneby, Jönköping
Uppvidinge | Vetlanda, Lessebo, Växjö, Högsby, Hultsfred, Nybro
Lessebo | Uppvidinge, Tingsryd, Växjö, Emmaboda, Nybro
Tingsryd | Lessebo, Alvesta, Älmhult, Växjö, Emmaboda, Olofström, Ronneby, Karlshamn
Alvesta | Värnamo, Sävsjö, Tingsryd, Älmhult, Växjö, Ljungby
Älmhult | Tingsryd, Alvesta, Markaryd, Ljungby, Olofström, Osby, Hässleholm
Markaryd | Älmhult, Ljungby, Örkelljunga, Osby, Hässleholm, Laholm
Växjö | Sävsjö, Vetlanda, Uppvidinge, Lessebo, Tingsryd, Alvesta
Ljungby | Gislaved, Värnamo, Alvesta, Älmhult, Markaryd, Hylte, Halmstad, Laholm
Högsby | Vetlanda, Uppvidinge, Hultsfred, Mönsterås, Nybro, Oskarshamn
Torsås | Emmaboda, Kalmar, Karlskrona
Mörbylånga | Borgholm
Hultsfred | Vetlanda, Eksjö, Uppvidinge, Högsby, Oskarshamn, Vimmerby
Mönsterås | Högsby, Kalmar, Nybro, Oskarshamn
Emmaboda | Lessebo, Tingsryd, Torsås, Kalmar, Nybro, Karlskrona, Ronneby
Kalmar | Torsås, Mönsterås, Emmaboda, Nybro
Nybro | Uppvidinge, Lessebo, Högsby, Mönsterås, Emmaboda, Kalmar
Oskarshamn | Högsby, Hultsfred, Mönsterås, Västervik, Vimmerby
Västervik | Kinda, Åtvidaberg, Valdemarsvik, Oskarshamn, Vimmerby
Vimmerby | Ydre, Kinda, Eksjö, Hultsfred, Oskarshamn, Västervik
Borgholm | Mörbylånga
Gotland |
Olofström | Tingsryd, Älmhult, Karlshamn, Sölvesborg, Östra Göinge, Bromölla, Osby, Kristianstad
Karlskrona | Torsås, Emmaboda, Ronneby
Ronneby | Tingsryd, Emmaboda, Karlskrona, Karlshamn
Karlshamn | Tingsryd, Olofström, Ronneby, Sölvesborg
Sölvesborg | Olofström, Karlshamn, Bromölla
Svalöv | Bjuv, Kävlinge, Klippan, Åstorp, Landskrona, Helsingborg, Eslöv
Staffanstorp | Burlöv, Lomma, Svedala, Malmö, Lund
Burlöv | Staffanstorp, Lomma, Malmö
Vellinge | Svedala, Malmö, Trelleborg
Östra Göinge | Olofström, Osby, Kristianstad, Hässleholm
Örkelljunga | Markaryd, Perstorp, Klippan, Ängelholm, Hässleholm, Laholm
Bjuv | Svalöv, Åstorp, Helsingborg
Kävlinge | Svalöv, Lomma, Lund, Landskrona, Eslöv
Lomma | Staffanstorp, Burlöv, Kävlinge, Lund
Svedala | Staffanstorp, Vellinge, Skurup, Malmö, Lund, Trelleborg
Skurup | Svedala, Sjöbo, Lund, Ystad, Trelleborg
Sjöbo | Skurup, Hörby, Tomelilla, Lund, Eslöv, Ystad
Hörby | Sjöbo, Höör, Tomelilla, Eslöv, Kristianstad, Hässleholm
Höör | Hörby, Klippan, Eslöv, Hässleholm
Tomelilla | Sjöbo, Hörby, Ystad, Kristianstad, Simrishamn
Bromölla | Olofström, Sölvesborg, Kristianstad
Osby | Älmhult, Markaryd, Olofström, Östra Göinge, Kristianstad, Hässleholm
Perstorp | Örkelljunga, Klippan, Hässleholm
Klippan | Svalöv, Örkelljunga, Höör, Perstorp, Åstorp, Eslöv, Ängelholm, Hässleholm
Åstorp | Svalöv, Bjuv, Klippan, Helsingborg, Ängelholm
Båstad | Ängelholm, Laholm
Malmö | Staffanstorp, Burlöv, Vellinge, Svedala
Lund | Staffanstorp, Kävlinge, Lomma, Svedala, Skurup, Sjöbo, Eslöv, Trelleborg
Landskrona | Svalöv, Kävlinge, Helsingborg
Helsingborg | Svalöv, Bjuv, Åstorp, Landskrona, Höganäs, Ängelholm
Höganäs | Helsingborg
Eslöv | Svalöv, Kävlinge, Sjöbo, Hörby, Höör, Klippan, Lund
Ystad | Skurup, Sjöbo, Tomelilla, Simrishamn
Trelleborg | Vellinge, Svedala, Skurup, Lund
Kristianstad | Olofström, Östra Göinge, Hörby, Tomelilla, Bromölla, Osby, Simrishamn, Hässleholm
Simrishamn | Tomelilla, Ystad, Kristianstad
Ängelholm | Örkelljunga, Klippan, Åstorp, Båstad, Helsingborg, Laholm
Hässleholm | Älmhult, Markaryd, Östra Göinge, Örkelljunga, Hörby, Höör, Osby, Perstorp, Klippan, Kristianstad
Hylte | Gislaved, Ljungby, Halmstad, Falkenberg
Halmstad | Ljungby, Hylte, Laholm, Falkenberg
Laholm | Markaryd, Ljungby, Örkelljunga, Båstad, Ängelholm, Halmstad
Falkenberg | Gislaved, Hylte, Halmstad, Varberg, Mark, Svenljunga
Varberg | Falkenberg, Kungsbacka, Mark, Svenljunga
Kungsbacka | Varberg, Härryda, Mark, Göteborg, Mölndal
Härryda | Kungsbacka, Partille, Lerum, Bollebygd, Mark, Göteborg, Mölndal
Partille | Härryda, Lerum, Göteborg
Öckerö |
Stenungsund | Lilla Edet, Kungälv, Uddevalla
Tjörn |
Orust | Lysekil, Uddevalla
Sotenäs | Munkedal, Tanum, Lysekil
Munkedal | Sotenäs, Tanum, Dals-Ed, Färgelanda, Lysekil, Uddevalla
Tanum | Sotenäs, Munkedal, Dals-Ed, Strömstad
Dals-Ed | Munkedal, Tanum, Färgelanda, Bengtsfors, Årjäng
Färgelanda | Munkedal, Dals-Ed, Bengtsfors, Mellerud, Uddevalla, Vänersborg
Ale | Lerum, Lilla Edet, Göteborg, Kungälv, Trollhättan, Alingsås
Lerum | Härryda, Partille, Ale, Bollebygd, Göteborg, Alingsås
Vårgårda | Bollebygd, Essunga, Herrljunga, Alingsås, Borås
Bollebygd | Härryda, Lerum, Vårgårda, Mark, Alingsås, Borås
Grästorp | Essunga, Vara, Vänersborg, Trollhättan, Lidköping
Essunga | Vårgårda, Grästorp, Herrljunga, Vara, Trollhättan, Alingsås
Karlsborg | Tibro, Töreboda, Hjo, Laxå, Askersund
Gullspång | Töreboda, Mariestad, Kristinehamn, Laxå, Degerfors
Tranemo | Gislaved, Jönköping, Svenljunga, Borås, Ulricehamn
Bengtsfors | Dals-Ed, Färgelanda, Mellerud, Åmål, Årjäng, Säffle
Mellerud | Färgelanda, Bengtsfors, Vänersborg, Åmål
Lilla Edet | Stenungsund, Ale, Kungälv, Uddevalla, Vänersborg, Trollhättan
Mark | Falkenberg, Varberg, Kungsbacka, Härryda, Bollebygd, Svenljunga, Mölndal, Borås
Svenljunga | Gislaved, Falkenberg, Varberg, Tranemo, Mark, Borås
Herrljunga | Vårgårda, Essunga, Vara, Borås, Ulricehamn, Falköping
Vara | Grästorp, Essunga, Herrljunga, Lidköping, Skara, Falköping
Götene | Mariestad, Lidköping, Skara, Skövde
Tibro | Karlsborg, Töreboda, Skövde, Hjo
Töreboda | Karlsborg, Gullspång, Tibro, Mariestad, Skövde, Laxå
Göteborg | Kungsbacka, Härryda, Partille, Ale, Lerum, Mölndal, Kungälv
Mölndal | Kungsbacka, Härryda, Mark, Göteborg
Kungälv | Stenungsund, Ale, Lilla Edet, Göteborg
Lysekil | Orust, Sotenäs, Munkedal, Uddevalla
Uddevalla | Stenungsund, Orust, Munkedal, Färgelanda, Lilla Edet, Lysekil, Vänersborg, Trollhättan
Strömstad | Tanum
Vänersborg | Färgelanda, Grästorp, Mellerud, Lilla Edet, Uddevalla, Trollhättan, Lidköping
Trollhättan | Ale, Grästorp, Essunga, Lilla Edet, Uddevalla, Vänersborg, Alingsås
Alingsås | Ale, Lerum, Vårgårda, Bollebygd, Essunga, Trollhättan
Borås | Vårgårda, Bollebygd, Tranemo, Mark, Svenljunga, Herrljunga, Ulricehamn
Ulricehamn | Mullsjö, Jönköping, Tranemo, Herrljunga, Borås, Falköping
Åmål | Bengtsfors, Mellerud, Årjäng, Säffle
Mariestad | Gullspång, Götene, Töreboda, Skövde
Lidköping | Grästorp, Vara, Götene, Vänersborg, Skara
Skara | Vara, Götene, Lidköping, Skövde, Falköping
Skövde | Götene, Tibro, Töreboda, Mariestad, Skara, Hjo, Tidaholm, Falköping
Hjo | Habo, Karlsborg, Tibro, Skövde, Tidaholm
Tidaholm | Mullsjö, Habo, Skövde, Hjo, Falköping
Falköping | Mullsjö, Herrljunga, Vara, Ulricehamn, Skara, Skövde, Tidaholm
Kil | Forshaga, Grums, Sunne, Karlstad, Arvika
Eda | Årjäng, Arvika
Torsby | Sunne, Hagfors, Arvika, Malung-Sälen
Storfors | Karlstad, Kristinehamn, Filipstad, Hällefors, Karlskoga
Hammarö | Karlstad
Munkfors | Forshaga, Sunne, Hagfors
Forshaga | Kil, Munkfors, Sunne, Karlstad, Hagfors
Grums | Kil, Karlstad, Arvika, Säffle
Årjäng | Dals-Ed, Bengtsfors, Åmål, Eda, Arvika, Säffle
Sunne | Kil, Torsby, Munkfors, Forshaga, Hagfors, Arvika
Karlstad | Kil, Storfors, Hammarö, Forshaga, Grums, Kristinehamn, Filipstad, Hagfors
Kristinehamn | Gullspång, Storfors, Karlstad, Laxå, Degerfors, Karlskoga
Filipstad | Storfors, Karlstad, Hagfors, Hällefors, Vansbro, Malung-Sälen, Ludvika
Hagfors | Torsby, Munkfors, Forshaga, Sunne, Karlstad, Filipstad, Malung-Sälen
Arvika | Kil, Eda, Torsby, Grums, Årjäng, Sunne, Säffle
Säffle | Bengtsfors, Åmål, Grums, Årjäng, Arvika
Lekeberg | Laxå, Hallsberg, Degerfors, Örebro, Kumla, Karlskoga
Laxå | Karlsborg, Gullspång, Töreboda, Kristinehamn, Lekeberg, Hallsberg, Degerfors, Askersund
Hallsberg | Finspång, Motala, Lekeberg, Laxå, Örebro, Kumla, Askersund
Degerfors | Gullspång, Kristinehamn, Lekeberg, Laxå, Karlskoga
Hällefors | Storfors, Filipstad, Ljusnarsberg, Karlskoga, Nora, Lindesberg, Ludvika
Ljusnarsberg | Hällefors, Lindesberg, Smedjebacken, Ludvika
Örebro | Vingåker, Finspång, Lekeberg, Hallsberg, Kumla, Karlskoga, Nora, Lindesberg, Arboga
Kumla | Lekeberg, Hallsberg, Örebro
Askersund | Motala, Karlsborg, Laxå, Hallsberg
Karlskoga | Storfors, Kristinehamn, Lekeberg, Degerfors, Hällefors, Örebro, Nora
Nora | Hällefors, Örebro, Karlskoga, Lindesberg
Lindesberg | Hällefors, Ljusnarsberg, Örebro, Nora, Skinnskatteberg, Köping, Arboga, Smedjebacken
Skinnskatteberg | Lindesberg, Surahammar, Fagersta, Köping, Smedjebacken
Surahammar | Skinnskatteberg, Hallstahammar, Västerås, Sala, Fagersta, Köping
Kungsör | Eskilstuna, Köping, Arboga
Hallstahammar | Surahammar, Västerås, Köping
Norberg | Sala, Fagersta, Smedjebacken, Hedemora, Avesta
Västerås | Enköping, Surahammar, Hallstahammar, Sala, Köping
Sala | Heby, Enköping, Surahammar, Norberg, Västerås, Fagersta, Avesta, Sandviken
Fagersta | Skinnskatteberg, Surahammar, Norberg, Sala, Smedjebacken
Köping | Lindesberg, Skinnskatteberg, Surahammar, Kungsör, Hallstahammar, Västerås, Arboga
Arboga | Eskilstuna, Örebro, Lindesberg, Kungsör, Köping
Vansbro | Filipstad, Malung-Sälen, Gagnef, Leksand, Mora, Ludvika
Malung-Sälen | Torsby, Filipstad, Hagfors, Vansbro, Älvdalen, Mora
Gagnef | Vansbro, Leksand, Falun, Borlänge, Ludvika
Leksand | Vansbro, Gagnef, Rättvik, Mora, Falun, Borlänge
Rättvik | Leksand, Orsa, Mora, Falun, Ovanåker, Ljusdal
Orsa | Rättvik, Mora, Ljusdal, Härjedalen
Älvdalen | Malung-Sälen, Mora, Härjedalen
Smedjebacken | Ljusnarsberg, Lindesberg, Skinnskatteberg, Norberg, Fagersta, Säter, Hedemora, Ludvika
Mora | Vansbro, Malung-Sälen, Leksand, Rättvik, Orsa, Älvdalen, Härjedalen
Falun | Gagnef, Leksand, Rättvik, Borlänge, Säter, Hedemora, Ockelbo, Hofors, Ovanåker, Sandviken, Bollnäs
Borlänge | Gagnef, Leksand, Falun, Säter, Ludvika
Säter | Smedjebacken, Falun, Borlänge, Hedemora, Ludvika, Hofors
Hedemora | Norberg, Smedjebacken, Falun, Säter, Avesta, Hofors
Avesta | Heby, Norberg, Sala, Hedemora, Hofors, Sandviken
Ludvika | Filipstad, Hällefors, Ljusnarsberg, Vansbro, Gagnef, Smedjebacken, Borlänge, Säter
Ockelbo | Falun, Gävle, Sandviken, Söderhamn, Bollnäs
Hofors | Falun, Säter, Hedemora, Avesta, Sandviken
Ovanåker | Rättvik, Falun, Ljusdal, Bollnäs
Nordanstig | Hudiksvall, Ånge, Sundsvall
Ljusdal | Rättvik, Orsa, Ovanåker, Bollnäs, Hudiksvall, Ånge, Härjedalen
Gävle | Älvkarleby, Heby, Tierp, Ockelbo, Sandviken, Söderhamn
Sandviken | Heby, Sala, Falun, Avesta, Ockelbo, Hofors, Gävle
Söderhamn | Ockelbo, Gävle, Bollnäs, Hudiksvall
Bollnäs | Falun, Ockelbo, Ovanåker, Ljusdal, Söderhamn, Hudiksvall
Hudiksvall | Nordanstig, Ljusdal, Söderhamn, Bollnäs, Ånge
Ånge | Nordanstig, Ljusdal, Hudiksvall, Sundsvall, Bräcke, Berg, Härjedalen
Timrå | Härnösand, Sundsvall, Sollefteå
Härnösand | Timrå, Sundsvall, Kramfors, Sollefteå
Sundsvall | Nordanstig, Ånge, Timrå, Härnösand, Sollefteå, Ragunda, Bräcke
Kramfors | Härnösand, Sollefteå, Örnsköldsvik
Sollefteå | Timrå, Härnösand, Sundsvall, Kramfors, Örnsköldsvik, Ragunda, Strömsund, Dorotea, Åsele
Örnsköldsvik | Kramfors, Sollefteå, Nordmaling, Bjurholm, Åsele
Ragunda | Sundsvall, Sollefteå, Bräcke, Strömsund, Östersund
Bräcke | Ånge, Sundsvall, Ragunda, Berg, Östersund
Krokom | Strömsund, Åre, Östersund
Strömsund | Sollefteå, Ragunda, Krokom, Östersund, Dorotea, Vilhelmina
Åre | Krokom, Berg
Berg | Ånge, Bräcke, Åre, Härjedalen, Östersund
Härjedalen | Orsa, Älvdalen, Mora, Ljusdal, Ånge, Berg
Östersund | Ragunda, Bräcke, Krokom, Strömsund, Berg
Nordmaling | Örnsköldsvik, Bjurholm, Vännäs, Umeå
Bjurholm | Örnsköldsvik, Nordmaling, Vindeln, Vännäs, Åsele, Lycksele
Vindeln | Bjurholm, Norsjö, Vännäs, Umeå, Lycksele, Skellefteå
Robertsfors | Umeå, Skellefteå
Norsjö | Vindeln, Malå, Lycksele, Skellefteå, Arvidsjaur
Malå | Norsjö, Sorsele, Lycksele, Arvidsjaur
Storuman | Sorsele, Vilhelmina, Lycksele
Sorsele | Malå, Storuman, Lycksele, Arvidsjaur, Arjeplog
Dorotea | Sollefteå, Strömsund, Vilhelmina, Åsele
Vännäs | Nordmaling, Bjurholm, Vindeln, Umeå
Vilhelmina | Strömsund, Storuman, Dorotea, Åsele, Lycksele
Åsele | Sollefteå, Örnsköldsvik, Bjurholm, Dorotea, Vilhelmina, Lycksele
Umeå | Nordmaling, Vindeln, Robertsfors, Vännäs, Skellefteå
Lycksele | Bjurholm, Vindeln, Norsjö, Malå, Storuman, Sorsele, Vilhelmina, Åsele
Skellefteå | Vindeln, Robertsfors, Norsjö, Umeå, Arvidsjaur, Piteå
Arvidsjaur | Norsjö, Malå, Sorsele, Skellefteå, Arjeplog, Jokkmokk, Älvsbyn, Piteå
Arjeplog | Sorsele, Arvidsjaur, Jokkmokk
Jokkmokk | Arvidsjaur, Arjeplog, Gällivare, Älvsbyn, Boden
Överkalix | Kalix, Övertorneå, Pajala, Gällivare, Luleå, Boden
Kalix | Överkalix, Övertorneå, Luleå, Haparanda
Övertorneå | Överkalix, Kalix, Pajala, Haparanda
Pajala | Överkalix, Övertorneå, Gällivare, Kiruna
Gällivare | Jokkmokk, Överkalix, Pajala, Boden, Kiruna
Älvsbyn | Arvidsjaur, Jokkmokk, Luleå, Piteå, Boden
Luleå | Överkalix, Kalix, Älvsbyn, Piteå, Boden
Piteå | Skellefteå, Arvidsjaur, Älvsbyn, Luleå, Boden
Boden | Jokkmokk, Överkalix, Gällivare, Älvsbyn, Luleå, Piteå
Haparanda | Kalix, Övertorneå
Kiruna | Pajala, Gällivare

## Recreate the list from the input file

- Replace or update the file `input/input.csv`, exported from QGIS, with a file using the same format.
- Run the `npm run build` script (or `node ./build.mjs` directly) in this repository.

The `output` directory will then contain updated versions of the output files.
