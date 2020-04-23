$(document).ready(function(){
    $('#eczane_ara_form').on("submit",function(e){ // Formdaki tüm verilere erişilir
     
      document.getElementById("ara_button").value = "ARANIYOR...";
      document.getElementById("ara_button").disabled = true;
        e.preventDefault(); // Sayfa değişmesini engeller       
        $.ajax({ // Ajax Metodu
            url: 'ajax.php', // POST edilecek sayfa
            type: 'POST', // Gönderim Metodu POST
            data: new FormData(this), //Veriyi array halinde gönderiyor
            contentType: false, // JQuery karakter seti
            processData: false, // Gönderilen veriyi query stringe dönüşmesi engellenir.
            success: function(donen_veri){ // Eğer true değer dönerse
              document.getElementById("ara_button").value = "ARA";
              document.getElementById("ara_button").disabled = false;


              $("#gelen_veriler").html(donen_veri);
              $(window).scrollTop($('#gelen_veriler').offset().top);
            }
        });
    });
});



var ank       = new Array("Akyurt","Altındağ","Ayaş","Balâ","Beypazarı","Çamlıdere","Çankaya","Çubuk","Elmadağ","Etimesgut","Evren","Gölbaşı","Güdül","Haymana","Kalecik","Kahramankazan","Keçiören","Kızılcahamam","Mamak","Nallıhan","Polatlı","Pursaklar","Sincan","Şereflikoçhisar","Yenimahalle");

var ist       = new Array("Adalar","Arnavutköy","Ataşehir","Avcılar","Bağcılar","Bahçelievler","Bakırköy","Başakşehir","Bayrampaşa","Beşiktaş","Beykoz","Beylikdüzü","Beyoğlu","Büyükçekmece","Çatalca","Çekmeköy","Esenler","Esenyurt","Eyüp","Fatih","Gaziosmanpaşa","Güngören","Kadıköy","Kağıthane","Kartal","Küçükçekmece","Maltepe","Pendik","Sancaktepe","Sarıyer","Silivri","Sultanbeyli","Sultangazi","Şile","Şişli","Tuzla","Ümraniye","Üsküdar","Zeytinburnu");

var izmr      = new Array("Aliağa","Balçova","Bayındır","Bayraklı","Bergama","Beydağ","Bornova","Buca","Çeşme","Çiğli","Dikili","Foça","Gaziemir","Güzelbahçe","Karabağlar","Karaburun","Karşıyaka","Kemalpaşa","Kınık","Kiraz","Konak","Menderes","Menemen","Narlıdere","Ödemiş","Seferihisar","Selçuk","Tire","Torbalı","Urla");

var adna      = new Array("Aladağ","Ceyhan","Çukurova","Feke","İmamoğlu","Karaisalı","Karataş","Kozan","Pozantı","Saimbeyli","Sarıçam","Seyhan","Tufanbeyli","Yumurtalık","Yüreğir");

var adymn       = new Array("Merkez","Besni","Çelikhan","Gerger","Gölbaşı","Kâhta","Samsat","Sincik","Tut");

var afyn      = new Array("Merkez","Başmakçı","Bayat","Bolvadin","Çay","Çobanlar","Dazkırı","Dinar","Emirdağ","Evciler","Hocalar","İhsaniye","İscehisar","Kızılören","Sandıklı","Sinanpaşa","Sultandağı","Şuhut");

var agri      = new Array("Merkez","Diyadin","Doğubayazıt","Eleşkirt","Hamur","Patnos","Taşlıçay","Tutak");

var aksry       = new Array("Merkez","Ağaçören","Aksaray","Eskil","Gülağaç","Güzelyurt","Ortaköy","Sarıyahşi");

var amsya       = new Array("Merkez","Göynücek","Gümüşhacıköy","Hamamözü","Merzifon","Suluova","Taşova");

var ant       = new Array("Akseki","Aksu","Alanya","Döşemealtı","Elmalı","Finike","Gazipaşa","Gündoğmuş","İbradı","Demre","Kaş","Kemer","Kepez","Konyaaltı","Korkuteli","Kumluca","Manavgat","Muratpaşa","Serik");

var ardhn       = new Array("Merkez","Çıldır","Damal","Göle","Hanak","Posof");

var artvn       = new Array("Merkez", "Ardanuç","Arhavi", "Borçka","Hopa","Murgul","Şavşat","Yusufeli");

var aydn      = new Array("Bozdoğan","Buharkent","Çine","Didim","Efeler","Germencik","İncirliova","Karacasu","Karpuzlu","Koçarlı","Köşk","Kuşadası","Kuyucak","Nazilli","Söke","Sultanhisar","Yenipazar");

var baliksr     = new Array("Altıeylül","Ayvalık","Balya","Bandırma","Bigadiç","Burhaniye","Dursunbey","Edremit","Erdek","Gömeç","Gönen","Havran","İvrindi","Karesi","Kepsut","Manyas","Marmara","Savaştepe","Sındırgı","Susurluk");

var brtn      = new Array("Merkez", "Amasra", "Kurucaşile","Ulus");

var btmn      = new Array("Merkez","Beşiri","Gercüş","Hasankeyf","Kozluk","Sason");

var bybrt       = new Array("Merkez", "Aydıntepe", "Demirözü");

var bilck       = new Array("Merkez","Bozüyük","Gölpazarı","İnhisar","Osmaneli","Pazaryeri","Söğüt","Yenipazar");

var bngl      = new Array("Merkez", "Adaklı", "Genç","Karlıova","Kiğı","Solhan","Yayladere","Yedisu");

var btls      = new Array("Merkez", "Adilcevaz","Ahlat", "Güroymak","Hizan","Mutki","Tatvan");

var blu       = new Array("Merkez","Dörtdivan","Gerede","Göynük","Kıbrıscık","Mengen","Mudurnu","Seben","Yeniçağa");

var brdr      = new Array("Merkez", "Ağlasun","Altınyayla","Bucak", "Çavdır","Çeltikçi","Gölhisar","Karamanlı","Kemer","Tefenni","Yeşilova");

var brsa      = new Array("Büyükorhan","Gemlik","Gürsu","Harmancık","İnegöl","İznik","Karacabey","Keles","Kestel","Mudanya","Mustafakemalpaşa","Nilüfer","Orhaneli","Orhangazi","Osmangazi","Yenişehir","Yıldırım");

var cnk       = new Array("Merkez", "Ayvacık","Bayramiç","Biga","Bozcaada","Çan", "Eceabat","Ezine","Gelibolu","Gökçeada","Lapseki","Yenice");

var cnkri       = new Array("Merkez", "Atkaracalar","Bayramören", "Çerkeş","Eldivan","Ilgaz","Kızılırmak","Korgun","Kurşunlu","Orta","Şabanözü","Yapraklı");

var crm       = new Array("Merkez", "Alaca","Bayat","Boğazkale","Dodurga","İskilip","Kargı","Laçin","Mecitözü","Oğuzlar","Ortaköy","Osmancık","Sungurlu","Uğurludağ");

var dnzli       = new Array("Acıpayam","Babadağ","Baklan","Bekilli","Beyağaç","Bozkurt","Buldan","Çal","Çameli","Çardak","Çivril","Güney","Honaz","Kale","Merkezefendi","Pamukkale","Sarayköy","Serinhisar","Tavas");

var dyrbkr      = new Array("Bağlar","Bismil","Çermik","Çınar","Çüngüş","Dicle","Eğil","Ergani","Hani","Hazro","Kayapınar","Kocaköy","Kulp","Lice","Silvan","Sur","Yenişehir");

var dzce      = new Array("Merkez","Akçakoca","Cumayeri","Çilimli","Gölyaka","Gümüşova","Kaynaşlı","Yığılca");

var edrne       = new Array("Merkez","Havsa","İpsala","Keşan","Lalapaşa","Meriç","Enez","Süloğlu","Uzunköprü");

var elzg      = new Array("Merkez","Alacakaya","Arıcak","Baskil","Ağın","Karakoçan","Keban","Kovancılar","Maden","Palu","Sivrice");

var erzncn      = new Array("Merkez","Çayırlı","İliç","Kemah","Kemaliye","Otlukbeli","Refahiye","Tercan","Üzümlü");

var erzrm       = new Array("Aşkale","Aziziye","Çat","Hınıs","Horasan","İspir","Karaçoban","Karayazı","Köprüköy","Narman","Oltu","Olur","Palandöken","Pasinler","Pazaryolu","Şenkaya","Tekman","Tortum","Uzundere","Yakutiye");

var eskishr     = new Array("Alpu","Beylikova","Çifteler","Günyüzü","Han","İnönü","Mahmudiye","Mihalgazi","Mihalıççık","Odunpazarı","Sarıcakaya","Seyitgazi","Sivrihisar","Tepebaşı");

var gantep      = new Array("Araban","İslahiye","Karkamış","Nizip","Nurdağı","Oğuzeli","Şahinbey","Şehitkâmil","Yavuzeli");

var grsn      = new Array("Merkez","Alucra","Bulancak","Çamoluk","Çanakçı","Dereli","Doğankent","Espiye","Eynesil","Görele","Güce","Keşap","Piraziz","Şebinkarahisar","Tirebolu","Yağlıdere");

var ghane     = new Array("Merkez","Kelkit","Köse","Kürtün","Şiran","Torul");

var hkkri     = new Array("Merkez","Çukurca","Şemdinli","Yüksekova");

var hty       = new Array("Altınözü","Antakya","Arsuz","Belen","Defne","Dörtyol","Erzin","Hassa","İskenderun","Kırıkhan","Kumlu","Payas","Reyhanlı","Samandağ","Yayladağı");

var igdr      = new Array("Merkez","Aralık","Karakoyunlu","Tuzluca");

var isprta      = new Array("Merkez","Aksu","Atabey","Eğirdir","Gelendost","Gönen","Keçiborlu","Senirkent","Sütçüler","Şarkikaraağaç","Uluborlu","Yalvaç","Yenişarbademli");

var kmaras      = new Array("Afşin","Andırın","Çağlayancerit","Dulkadiroğlu","Ekinözü","Elbistan","Göksun","Nurhak","Onikişubat","Pazarcık","Türkoğlu");

var krbk      = new Array("Eflani","Eskipazar","Karabük","Ovacık","Safranbolu","Yenice");

var krmn      = new Array("Merkez","Ayrancı","Başyayla","Ermenek","Kazımkarabekir","Sarıveliler");

var krs       = new Array("Merkez","Akyaka","Arpaçay","Digor","Kağızman","Sarıkamış","Selim","Susuz");

var kstmn     = new Array("Merkez","Abana","Ağlı","Araç","Azdavay","Bozkurt","Cide","Çatalzeytin","Daday","Devrekani","Doğanyurt","Hanönü","İhsangazi","İnebolu","Küre","Pınarbaşı","Seydiler","Şenpazar","Taşköprü","Tosya");

var kysr      = new Array("Akkışla","Bünyan","Develi","Felahiye","Hacılar","İncesu","Kocasinan","Melikgazi","Özvatan","Pınarbaşı","Sarıoğlan","Sarız","Talas","Tomarza","Yahyalı","Yeşilhisar");

var kls       = new Array("Merkez","Elbeyli","Musabeyli","Polateli");

var krkkale     = new Array("Merkez","Bahşılı","Balışeyh","Çelebi","Delice","Karakeçili","Keskin","Sulakyurt","Yahşihan");

var krklreli    = new Array("Merkez","Babaeski","Demirköy","Kofçaz","Lüleburgaz","Pehlivanköy","Pınarhisar","Vize");

var krshr     = new Array("Merkez","Akçakent","Akpınar","Boztepe","Çiçekdağı","Kaman","Mucur");

var kceli     = new Array("Başiskele","Çayırova","Darıca","Derince","Dilovası","Gebze","Gölcük","İzmit","Kandıra","Karamürsel","Kartepe","Körfez");

var knya      = new Array("Ahırlı","Akören","Akşehir","Altınekin","Beyşehir","Bozkır","Cihanbeyli","Çeltik","Çumra","Derbent","Derebucak","Doğanhisar","Emirgazi","Ereğli","Güneysınır","Hadım","Halkapınar","Hüyük","Ilgın","Kadınhanı","Karapınar","Karatay","Kulu","Meram","Sarayönü","Selçuklu","Seydişehir","Taşkent","Tuzlukçu","Yalıhüyük","Yunak");

var kthya     = new Array("Merkez","Altıntaş","Aslanapa","Çavdarhisar","Domaniç","Dumlupınar","Emet","Gediz","Hisarcık","Pazarlar","Şaphane","Simav","Tavşanlı");

var mltya     = new Array("Akçadağ","Arapgir","Arguvan","Battalgazi","Darende","Doğanşehir","Doğanyol","Hekimhan","Kale","Kuluncak","Pütürge","Yazıhan","Yeşilyurt");

var mnsa      = new Array("Ahmetli","Akhisar","Alaşehir","Demirci","Gölmarmara","Gördes","Kırkağaç","Köprübaşı","Kula","Salihli","Sarıgöl","Saruhanlı","Selendi","Soma","Şehzadeler","Turgutlu","Yunusemre");

var mrdn      = new Array("Artuklu","Dargeçit","Derik","Kızıltepe","Mazıdağı","Midyat","Nusaybin","Ömerli","Savur","Yeşilli");

var mrsn      = new Array("Akdeniz","Anamur","Aydıncık","Bozyazı","Çamlıyayla","Erdemli","Gülnar","Mezitli","Mut","Silifke","Tarsus","Toroslar","Yenişehir");

var mgla      = new Array("Bodrum","Dalaman","Datça","Fethiye","Kavaklıdere","Köyceğiz","Marmaris","Menteşe","Milas","Ortaca","Seydikemer","Ula","Yatağan");

var ms        = new Array("Merkez","Bulanık","Hasköy","Korkut","Malazgirt","Varto");

var nvshr     = new Array("Merkez","Acıgöl","Avanos","Derinkuyu","Gülşehir","Hacıbektaş","Kozaklı","Ürgüp");

var ngde      = new Array("Merkez","Altunhisar","Bor","Çamardı","Çiftlik","Ulukışla");

var ord       = new Array("Akkuş","Altınordu","Aybastı","Çamaş","Çatalpınar","Çaybaşı","Fatsa","Gölköy","Gülyalı","Gürgentepe","İkizce","Kabadüz","Kabataş","Korgan","Kumru","Mesudiye","Perşembe","Ulubey","Ünye");

var osmnye      = new Array("Merkez","Bahçe","Düziçi","Hasanbeyli","Kadirli","Sumbas","Toprakkale");

var rze       = new Array("Merkez","Ardeşen","Çamlıhemşin","Çayeli","Derepazarı","Fındıklı","Güneysu","Hemşin","İkizdere","İyidere","Kalkandere","Pazar");

var skrya     = new Array("Adapazarı","Akyazı","Arifiye","Erenler","Ferizli","Geyve","Hendek","Karapürçek","Karasu","Kaynarca","Kocaali","Pamukova","Sapanca","Serdivan","Söğütlü","Taraklı");

var smsn      = new Array("Alaçam","Asarcık","Atakum","Ayvacık","Bafra","Canik","Çarşamba","Havza","İlkadım","Kavak","Ladik","Ondokuzmayıs","Salıpazarı","Tekkeköy","Terme","Vezirköprü","Yakakent");

var snlrf     = new Array("Akçakale","Birecik","Bozova","Ceylanpınar","Eyyübiye","Halfeti","Haliliye","Harran","Hilvan","Karaköprü","Siverek","Suruç","Viranşehir");

var srt       = new Array("Merkez","Tillo","Baykan","Eruh","Kurtalan","Pervari","Şirvan");

var snp       = new Array("Merkez","Ayancık","Boyabat","Dikmen","Durağan","Erfelek","Gerze","Saraydüzü","Türkeli");

var srnk      = new Array("Şırnak","Beytüşşebap","Cizre","Güçlükonak","İdil","Silopi","Uludere");

var svs       = new Array("Merkez","Akıncılar","Altınyayla","Divriği","Doğanşar","Gemerek","Gölova","Hafik","İmranlı","Kangal","Koyulhisar","Suşehri","Şarkışla","Ulaş","Yıldızeli","Zara","Gürün");

var tkrdg     = new Array("Çerkezköy","Çorlu","Ergene","Hayrabolu","Kapaklı","Malkara","Marmara Ereğlisi","Muratlı","Saray","Süleymanpaşa","Şarköy");

var tkt       = new Array("Merkez","Almus","Artova","Başçiftlik","Erbaa","Niksar","Pazar","Reşadiye","Sulusaray","Turhal","Yeşilyurt","Zile");

var trbzn     = new Array("Akçaabat","Araklı","Arsin","Beşikdüzü","Çarşıbaşı","Çaykara","Dernekpazarı","Düzköy","Hayrat","Köprübaşı","Maçka","Of","Ortahisar","Sürmene","Şalpazarı","Tonya","Vakfıkebir","Yomra");

var tncli     = new Array("Merkez","Çemişgezek","Hozat","Mazgirt","Nazımiye","Ovacık","Pertek","Pülümür");

var usk       = new Array("Merkez","Banaz","Eşme","Karahallı","Sivaslı","Ulubey");

var vn        = new Array("Bahçesaray","Başkale","Çaldıran","Çatak","Edremit","Erciş","Gevaş","Gürpınar","İpekyolu","Muradiye","Özalp","Saray","Tuşba");

var ylva      = new Array("Merkez","Altınova","Armutlu","Çınarcık","Çiftlikköy","Termal");

var yzgt      = new Array("Merkez","Akdağmadeni","Aydıncık","Boğazlıyan","Çandır","Çayıralan","Çekerek","Kadışehri","Saraykent","Sarıkaya","Sorgun","Şefaatli","Yenifakılı","Yerköy");

var zngldk      = new Array("Merkez","Alaplı","Çaycuma","Devrek","Gökçebey","Kilimli","Kozlu","Karadeniz Ereğli");



function set_player() {

  var select_il = document.arama.il;

  var select_ilce = document.arama.ilce;

  var selected_il = select_il.options[select_il.selectedIndex].value;

 

  select_ilce.options.length=0;

  if (selected_il == "Ankara"){

    for(var i=0; i<ank.length; i++)

    select_ilce.options[select_ilce.options.length] = new Option(ank[i]);

  }

  if (selected_il == "İstanbul"){

    for(var i=0; i<ist.length; i++)

    select_ilce.options[select_ilce.options.length] = new Option(ist[i]);

  }

  if (selected_il == "İzmir"){

    for(var i=0; i<izmr.length; i++)

    select_ilce.options[select_ilce.options.length] = new Option(izmr[i]);

  }

  if (selected_il == "Adana"){

    for(var i=0; i<adna.length; i++)

    select_ilce.options[select_ilce.options.length] = new Option(adna[i]);

  }

  if (selected_il == "Adıyaman"){

    for(var i=0; i<adymn.length; i++)

    select_ilce.options[select_ilce.options.length] = new Option(adymn[i]);

  }

  if (selected_il == "Afyon"){

    for(var i=0; i<afyn.length; i++)

    select_ilce.options[select_ilce.options.length] = new Option(afyn[i]);

  }

  if (selected_il == "Ağrı"){

    for(var i=0; i<agri.length; i++)

    select_ilce.options[select_ilce.options.length] = new Option(agri[i]);

  }

  if (selected_il == "Aksaray"){

    for(var i=0; i<aksry.length; i++)

    select_ilce.options[select_ilce.options.length] = new Option(aksry[i]);

  }

  if (selected_il == "Amasya"){

    for(var i=0; i<amsya.length; i++)

    select_ilce.options[select_ilce.options.length] = new Option(amsya[i]);

  }

  if (selected_il == "Antalya"){

    for(var i=0; i<ant.length; i++)

    select_ilce.options[select_ilce.options.length] = new Option(ant[i]);

  }

  if (selected_il == "Ardahan"){

    for(var i=0; i<ardhn.length; i++)

    select_ilce.options[select_ilce.options.length] = new Option(ardhn[i]);

  }

  if (selected_il == "Artvin"){

    for(var i=0; i<artvn.length; i++)

    select_ilce.options[select_ilce.options.length] = new Option(artvn[i]);

  }

  if (selected_il == "Aydın"){

    for(var i=0; i<aydn.length; i++)

    select_ilce.options[select_ilce.options.length] = new Option(aydn[i]);

  }

  if (selected_il == "Balıkesir"){

    for(var i=0; i<baliksr.length; i++)

    select_ilce.options[select_ilce.options.length] = new Option(baliksr[i]);

  }

  if (selected_il == "Bartın"){

    for(var i=0; i<brtn.length; i++)

    select_ilce.options[select_ilce.options.length] = new Option(brtn[i]);

  }

  if (selected_il == "Batman"){

    for(var i=0; i<btmn.length; i++)

    select_ilce.options[select_ilce.options.length] = new Option(btmn[i]);

  }

  if (selected_il == "Bayburt"){

    for(var i=0; i<bybrt.length; i++)

    select_ilce.options[select_ilce.options.length] = new Option(bybrt[i]);

  }

  if (selected_il == "Bilecik"){

    for(var i=0; i<bilck.length; i++)

    select_ilce.options[select_ilce.options.length] = new Option(bilck[i]);

  }

  if (selected_il == "Bingöl"){

    for(var i=0; i<bngl.length; i++)

    select_ilce.options[select_ilce.options.length] = new Option(bngl[i]);

  }

  if (selected_il == "Bitlis"){

    for(var i=0; i<btls.length; i++)

    select_ilce.options[select_ilce.options.length] = new Option(btls[i]);

  }

  if (selected_il == "Bolu"){

    for(var i=0; i<blu.length; i++)

    select_ilce.options[select_ilce.options.length] = new Option(blu[i]);

  }

  if (selected_il == "Burdur"){

    for(var i=0; i<brdr.length; i++)

    select_ilce.options[select_ilce.options.length] = new Option(brdr[i]);

  }

  if (selected_il == "Bursa"){

    for(var i=0; i<brsa.length; i++)

    select_ilce.options[select_ilce.options.length] = new Option(brsa[i]);

  }

  if (selected_il == "Çanakkale"){

    for(var i=0; i<cnk.length; i++)

    select_ilce.options[select_ilce.options.length] = new Option(cnk[i]);

  }

  if (selected_il == "Çankırı"){

    for(var i=0; i<cnkri.length; i++)

    select_ilce.options[select_ilce.options.length] = new Option(cnkri[i]);

  }

  if (selected_il == "Çorum"){

    for(var i=0; i<crm.length; i++)

    select_ilce.options[select_ilce.options.length] = new Option(crm[i]);

  }

  if (selected_il == "Denizli"){

    for(var i=0; i<dnzli.length; i++)

    select_ilce.options[select_ilce.options.length] = new Option(dnzli[i]);

  }

  if (selected_il == "Diyarbakır"){

    for(var i=0; i<dyrbkr.length; i++)

    select_ilce.options[select_ilce.options.length] = new Option(dyrbkr[i]);

  }

  if (selected_il == "Düzce"){

    for(var i=0; i<dzce.length; i++)

    select_ilce.options[select_ilce.options.length] = new Option(dzce[i]);

  }

  if (selected_il == "Edirne"){

    for(var i=0; i<edrne.length; i++)

    select_ilce.options[select_ilce.options.length] = new Option(edrne[i]);

  }

  if (selected_il == "Elazığ"){

    for(var i=0; i<elzg.length; i++)

    select_ilce.options[select_ilce.options.length] = new Option(elzg[i]);

  }

  if (selected_il == "Erzincan"){

    for(var i=0; i<erzncn.length; i++)

    select_ilce.options[select_ilce.options.length] = new Option(erzncn[i]);

  }

  if (selected_il == "Erzurum"){

    for(var i=0; i<erzrm.length; i++)

    select_ilce.options[select_ilce.options.length] = new Option(erzrm[i]);

  }

  if (selected_il == "Eskişehir"){

    for(var i=0; i<eskishr.length; i++)

    select_ilce.options[select_ilce.options.length] = new Option(eskishr[i]);

  }

  if (selected_il == "Gaziantep"){

    for(var i=0; i<gantep.length; i++)

    select_ilce.options[select_ilce.options.length] = new Option(gantep[i]);

  }

  if (selected_il == "Giresun"){

    for(var i=0; i<grsn.length; i++)

    select_ilce.options[select_ilce.options.length] = new Option(grsn[i]);

  }

  if (selected_il == "Gümüşhane"){

    for(var i=0; i<ghane.length; i++)

    select_ilce.options[select_ilce.options.length] = new Option(ghane[i]);

  }

  if (selected_il == "Hakkari"){

    for(var i=0; i<hkkri.length; i++)

    select_ilce.options[select_ilce.options.length] = new Option(hkkri[i]);

  }

  if (selected_il == "Hatay"){

    for(var i=0; i<hty.length; i++)

    select_ilce.options[select_ilce.options.length] = new Option(hty[i]);

  }

  if (selected_il == "Iğdır"){

    for(var i=0; i<igdr.length; i++)

    select_ilce.options[select_ilce.options.length] = new Option(igdr[i]);

  }

  if (selected_il == "Isparta"){

    for(var i=0; i<isprta.length; i++)

    select_ilce.options[select_ilce.options.length] = new Option(isprta[i]);

  }

  if (selected_il == "Kahramanmaraş"){

    for(var i=0; i<kmaras.length; i++)

    select_ilce.options[select_ilce.options.length] = new Option(kmaras[i]);

  }

  if (selected_il == "Karabük"){

    for(var i=0; i<krbk.length; i++)

    select_ilce.options[select_ilce.options.length] = new Option(krbk[i]);

  }

  if (selected_il == "Karaman"){

    for(var i=0; i<krmn.length; i++)

    select_ilce.options[select_ilce.options.length] = new Option(krmn[i]);

  }

  if (selected_il == "Kars"){

    for(var i=0; i<krs.length; i++)

    select_ilce.options[select_ilce.options.length] = new Option(krs[i]);

  }

  if (selected_il == "Kastamonu"){

    for(var i=0; i<kstmn.length; i++)

    select_ilce.options[select_ilce.options.length] = new Option(kstmn[i]);

  }

  if (selected_il == "Kayseri"){

    for(var i=0; i<kysr.length; i++)

    select_ilce.options[select_ilce.options.length] = new Option(kysr[i]);

  }

  if (selected_il == "Kilis"){

    for(var i=0; i<kls.length; i++)

    select_ilce.options[select_ilce.options.length] = new Option(kls[i]);

  }

  if (selected_il == "Kırıkkale"){

    for(var i=0; i<krkkale.length; i++)

    select_ilce.options[select_ilce.options.length] = new Option(krkkale[i]);

  }

  if (selected_il == "Kırklareli"){

    for(var i=0; i<krklreli.length; i++)

    select_ilce.options[select_ilce.options.length] = new Option(krklreli[i]);

  }

  if (selected_il == "Kırşehir"){

    for(var i=0; i<krshr.length; i++)

    select_ilce.options[select_ilce.options.length] = new Option(krshr[i]);

  }

  if (selected_il == "Kocaeli"){

    for(var i=0; i<kceli.length; i++)

    select_ilce.options[select_ilce.options.length] = new Option(kceli[i]);

  }

  if (selected_il == "Konya"){

    for(var i=0; i<knya.length; i++)

    select_ilce.options[select_ilce.options.length] = new Option(knya[i]);

  }

  if (selected_il == "Kütahya"){

    for(var i=0; i<kthya.length; i++)

    select_ilce.options[select_ilce.options.length] = new Option(kthya[i]);

  }

  if (selected_il == "Malatya"){

    for(var i=0; i<mltya.length; i++)

    select_ilce.options[select_ilce.options.length] = new Option(mltya[i]);

  }

  if (selected_il == "Manisa"){

    for(var i=0; i<mnsa.length; i++)

    select_ilce.options[select_ilce.options.length] = new Option(mnsa[i]);

  }

  if (selected_il == "Mardin"){

    for(var i=0; i<mrdn.length; i++)

    select_ilce.options[select_ilce.options.length] = new Option(mrdn[i]);

  }

  if (selected_il == "Mersin"){

    for(var i=0; i<mrsn.length; i++)

    select_ilce.options[select_ilce.options.length] = new Option(mrsn[i]);

  }

  if (selected_il == "Muğla"){

    for(var i=0; i<mgla.length; i++)

    select_ilce.options[select_ilce.options.length] = new Option(mgla[i]);

  }

  if (selected_il == "Muş"){

    for(var i=0; i<ms.length; i++)

    select_ilce.options[select_ilce.options.length] = new Option(ms[i]);

  }

  if (selected_il == "Nevşehir"){

    for(var i=0; i<nvshr.length; i++)

    select_ilce.options[select_ilce.options.length] = new Option(nvshr[i]);

  }

  if (selected_il == "Niğde"){

    for(var i=0; i<ngde.length; i++)

    select_ilce.options[select_ilce.options.length] = new Option(ngde[i]);

  }

  if (selected_il == "Ordu"){

    for(var i=0; i<ord.length; i++)

    select_ilce.options[select_ilce.options.length] = new Option(ord[i]);

  }

  if (selected_il == "Osmaniye"){

    for(var i=0; i<osmnye.length; i++)

    select_ilce.options[select_ilce.options.length] = new Option(osmnye[i]);

  }

  if (selected_il == "Rize"){

    for(var i=0; i<rze.length; i++)

    select_ilce.options[select_ilce.options.length] = new Option(rze[i]);

  }

  if (selected_il == "Sakarya"){

    for(var i=0; i<skrya.length; i++)

    select_ilce.options[select_ilce.options.length] = new Option(skrya[i]);

  }

  if (selected_il == "Samsun"){

    for(var i=0; i<smsn.length; i++)

    select_ilce.options[select_ilce.options.length] = new Option(smsn[i]);

  }

  if (selected_il == "Şanlıurfa"){

    for(var i=0; i<snlrf.length; i++)

    select_ilce.options[select_ilce.options.length] = new Option(snlrf[i]);

  }

  if (selected_il == "Siirt"){

    for(var i=0; i<srt.length; i++)

    select_ilce.options[select_ilce.options.length] = new Option(srt[i]);

  }

  if (selected_il == "Sinop"){

    for(var i=0; i<snp.length; i++)

    select_ilce.options[select_ilce.options.length] = new Option(snp[i]);

  }

  if (selected_il == "Şırnak"){

    for(var i=0; i<srnk.length; i++)

    select_ilce.options[select_ilce.options.length] = new Option(srnk[i]);

  }

  if (selected_il == "Sivas"){

    for(var i=0; i<svs.length; i++)

    select_ilce.options[select_ilce.options.length] = new Option(svs[i]);

  }

  if (selected_il == "Tekirdağ"){

    for(var i=0; i<tkrdg.length; i++)

    select_ilce.options[select_ilce.options.length] = new Option(tkrdg[i]);

  }

  if (selected_il == "Tokat"){

    for(var i=0; i<tkt.length; i++)

    select_ilce.options[select_ilce.options.length] = new Option(tkt[i]);

  }

  if (selected_il == "Trabzon"){

    for(var i=0; i<trbzn.length; i++)

    select_ilce.options[select_ilce.options.length] = new Option(trbzn[i]);

  }

  if (selected_il == "Tunceli"){

    for(var i=0; i<tncli.length; i++)

    select_ilce.options[select_ilce.options.length] = new Option(tncli[i]);

  }

  if (selected_il == "Uşak"){

    for(var i=0; i<usk.length; i++)

    select_ilce.options[select_ilce.options.length] = new Option(usk[i]);

  }

  if (selected_il == "Van"){

    for(var i=0; i<vn.length; i++)

    select_ilce.options[select_ilce.options.length] = new Option(vn[i]);

  }

  if (selected_il == "Yalova"){

    for(var i=0; i<ylva.length; i++)

    select_ilce.options[select_ilce.options.length] = new Option(ylva[i]);

  }

  if (selected_il == "Yozgat"){

    for(var i=0; i<yzgt.length; i++)

    select_ilce.options[select_ilce.options.length] = new Option(yzgt[i]);

  }

  if (selected_il == "Zonguldak"){

    for(var i=0; i<zngldk.length; i++)

    select_ilce.options[select_ilce.options.length] = new Option(zngldk[i]);

  }


}






