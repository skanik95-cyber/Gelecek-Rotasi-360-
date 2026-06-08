// ABKÖ Test Questions - 170 Questions Total
// 4 Ability Areas (44 questions) + 12 Interest Areas (126 questions)

const testQuestions = [
    // ===== YETENEK ALANLARI (44 SORU) =====
    
    // SÖZEL YETENEK (12 soru)
    { id: 1, category: "Sözel Yetenek", type: "yetenek", text: "Yazılı metinleri hızlı ve anlamlı bir şekilde okuyup anlayabilirim." },
    { id: 2, category: "Sözel Yetenek", type: "yetenek", text: "Kelimeleri doğru bir şekilde kullanıp, dilbilgisine uygun cümleler kurarım." },
    { id: 3, category: "Sözel Yetenek", type: "yetenek", text: "Yazılı veya sözlü anlatımda kendimi açık ve etkili bir biçimde ifade edebilirim." },
    { id: 4, category: "Sözel Yetenek", type: "yetenek", text: "Okuduğum bir metinden ana fikirleri ve detayları kolayca ayırt edebilirim." },
    { id: 5, category: "Sözel Yetenek", type: "yetenek", text: "Sözcük hazinesinin geniş olduğunu ve yeni kelimeleri kolayca öğrendiğimi düşünürüm." },
    { id: 6, category: "Sözel Yetenek", type: "yetenek", text: "Dinlediğim konuşmaları anlamakta ve çabuk tepki vermekte iyiyim." },
    { id: 7, category: "Sözel Yetenek", type: "yetenek", text: "Tartışma ve müzakerelerinde etkili argümanlar sunabilirim." },
    { id: 8, category: "Sözel Yetenek", type: "yetenek", text: "Farklı yazı türlerini (makale, hikaye, şiir vb.) rahatlıkla yazabilirim." },
    { id: 9, category: "Sözel Yetenek", type: "yetenek", text: "Metin içindeki ima edilen anlamları ve gizli mesajları yakalayabilirim." },
    { id: 10, category: "Sözel Yetenek", type: "yetenek", text: "Yabancı kelimelerin anlamını bağlamdan tahmin edebilirim." },
    { id: 11, category: "Sözel Yetenek", type: "yetenek", text: "Konuşurken veya yazarken kendimi rahat ve özgüven içinde hissederim." },
    { id: 12, category: "Sözel Yetenek", type: "yetenek", text: "Yazılı iletişimde, resmi belgeleri ve ticari yazışmaları rahatlıkla yapabilirim." },
    
    // SAYISAL YETENEK (10 soru)
    { id: 13, category: "Sayısal Yetenek", type: "yetenek", text: "Matematiksel işlemleri hızlı ve doğru bir şekilde yapabilirim." },
    { id: 14, category: "Sayısal Yetenek", type: "yetenek", text: "Geometrik şekilleri zihnimde kolayca döndürebilir, ölçülerini tahmin edebilirim." },
    { id: 15, category: "Sayısal Yetenek", type: "yetenek", text: "Grafikleri, tabloları ve istatistikleri anlamakta ve yorumlamakta iyiyim." },
    { id: 16, category: "Sayısal Yetenek", type: "yetenek", text: "Mantıksal problemleri adım adım çözerim ve çözüm yolunu görebilirim." },
    { id: 17, category: "Sayısal Yetenek", type: "yetenek", text: "Yüzde, oran, orantı gibi matematiksel kavramları kolayca kavrarım." },
    { id: 18, category: "Sayısal Yetenek", type: "yetenek", text: "Bir işin sonucunu önceden tahmin etmek için matematiksel akıl yürütme kullanabilirim." },
    { id: 19, category: "Sayısal Yetenek", type: "yetenek", text: "Programlama ve algoritmaları anlamakta zorluk çekmem." },
    { id: 20, category: "Sayısal Yetenek", type: "yetenek", text: "Hesap makinesi olmadan mental matematik yapabilirim." },
    { id: 21, category: "Sayısal Yetenek", type: "yetenek", text: "Verileri analiz edip sonuç çıkartabilir, trend görebilirim." },
    { id: 22, category: "Sayısal Yetenek", type: "yetenek", text: "Ekonomi, finans ve ticari problemleri matematiksel olarak çözebilirim." },
    
    // ŞEKİL-UZAY YETENEĞİ (12 soru)
    { id: 23, category: "Şekil-Uzay Yeteneği", type: "yetenek", text: "Üç boyutlu nesneleri iki boyutta (kağıt üzerinde) iyi bir şekilde çizebilirim." },
    { id: 24, category: "Şekil-Uzay Yeteneği", type: "yetenek", text: "Haritaları okurum ve yer-mekan ilişkisini kolay anlayabilirim." },
    { id: 25, category: "Şekil-Uzay Yeteneği", type: "yetenek", text: "Bir nesneyi farklı açılardan görebilir, dönerken nasıl görüneceğini hayal edebilirim." },
    { id: 26, category: "Şekil-Uzay Yeteneği", type: "yetenek", text: "Puzzle ve blok oyunlarını çabuk ve doğru bir şekilde tamamlayabilirim." },
    { id: 27, category: "Şekil-Uzay Yeteneği", type: "yetenek", text: "Mimari tasarımları ve mühendislik planlarını anlayabilirim." },
    { id: 28, category: "Şekil-Uzay Yeteneği", type: "yetenek", text: "Görsel grafikleme yazılımlarını (CAD, SketchUp vb.) kolayca öğrenebilirim." },
    { id: 29, category: "Şekil-Uzay Yeteneği", type: "yetenek", text: "İç mekan tasarımı konusunda iyi fikirlere ve görüş açısına sahibim." },
    { id: 30, category: "Şekil-Uzay Yeteneği", type: "yetenek", text: "Renk, desen ve kompozisyon bakımından nesneleri estetik bir şekilde düzenleyebilirim." },
    { id: 31, category: "Şekil-Uzay Yeteneği", type: "yetenek", text: "Teknik çizimler yapmakta ve geometrik problemleri çözmekte iyiyim." },
    { id: 32, category: "Şekil-Uzay Yeteneği", type: "yetenek", text: "Haritalandırma ve konumlandırma görevlerinde hata yapma ihtimalim düşüktür." },
    { id: 33, category: "Şekil-Uzay Yeteneği", type: "yetenek", text: "Görsel sembollerden ve göstergelerden anlamını kolayca çıkarabilirim." },
    { id: 34, category: "Şekil-Uzay Yeteneği", type: "yetenek", text: "Sanat ve tasarım çalışmalarında yaratıcı ve orijinal fikirler üretebilirim." },
    
    // GÖZ-EL KOORDİNASYONU (10 soru)
    { id: 35, category: "Göz-El Koordinasyonu", type: "yetenek", text: "El becerilerini iyi bir şekilde kontrol edebilir, hassas işleri yapabilirim." },
    { id: 36, category: "Göz-El Koordinasyonu", type: "yetenek", text: "Sporta ve fiziksel aktivitelere yetenekli bir şekilde katılabilirim." },
    { id: 37, category: "Göz-El Koordinasyonu", type: "yetenek", text: "Yazı yazmak, çizmek ve sanat çalışmaları yapırken kararlı ve kontrollü hareket edebilirim." },
    { id: 38, category: "Göz-El Koordinasyonu", type: "yetenek", text: "Ayrıntılı manüel işlerde (terzi, tesisatçı vb.) başarılı olabileceğimi düşünürüm." },
    { id: 39, category: "Göz-El Koordinasyonu", type: "yetenek", text: "Video oyunları veya simülatör programlarında iyi bir performans gösterebilirim." },
    { id: 40, category: "Göz-El Koordinasyonu", type: "yetenek", text: "El aletlerini (tornavida, çekiç, matkap vb.) güvenli ve etkili bir şekilde kullanabilirim." },
    { id: 41, category: "Göz-El Koordinasyonu", type: "yetenek", text: "Müzik enstrümanı çalmayı veya dans etmeyi kolayca öğrenebilirim." },
    { id: 42, category: "Göz-El Koordinasyonu", type: "yetenek", text: "Hassas teknolojik cihazları ve uçları kurabilir, bakım yapabilirim." },
    { id: 43, category: "Göz-El Koordinasyonu", type: "yetenek", text: "İnşaat ve inşaat ilgili işlerde el kabiliyeti yeterli bulmaktayım." },
    { id: 44, category: "Göz-El Koordinasyonu", type: "yetenek", text: "Hızlı hareket gerektiren işlerde (masöz, cerrah vb.) başarılı olabilirim." },
    
    // ===== İLGİ ALANLARI (126 SORU) =====
    
    // FEN BİLİMLERİ İLGİSİ (12 soru)
    { id: 45, category: "Fen Bilimleri İlgisi", type: "ilgi", text: "Bilim ve teknoloji haberleri takip etmekten keyif alırım." },
    { id: 46, category: "Fen Bilimleri İlgisi", type: "ilgi", text: "Kimya, fizik ve biyoloji derslerini diğer derslere göre daha çok severim." },
    { id: 47, category: "Fen Bilimleri İlgisi", type: "ilgi", text: "Deney yapma ve araştırma fikri beni heyecanlandırır." },
    { id: 48, category: "Fen Bilimleri İlgisi", type: "ilgi", text: "Doğa ve uzay fenomenleri hakkında öğrenmek isterim." },
    { id: 49, category: "Fen Bilimleri İlgisi", type: "ilgi", text: "Nesnelerin neden bu şekilde çalıştığını anlamaya çalışırım." },
    { id: 50, category: "Fen Bilimleri İlgisi", type: "ilgi", text: "Bilim kurmaca filmleri ve kitapları düzenli izlerim/okurum." },
    { id: 51, category: "Fen Bilimleri İlgisi", type: "ilgi", text: "Sağlık ve tıp alanındaki gelişmelerle ilgilenirim." },
    { id: 52, category: "Fen Bilimleri İlgisi", type: "ilgi", text: "Çevre ve ekoloji sorunları hakkında farkında ve endişeli olduğumu hissediyorum." },
    { id: 53, category: "Fen Bilimleri İlgisi", type: "ilgi", text: "Bilim müze ve sergilerine gitmeyi severim." },
    { id: 54, category: "Fen Bilimleri İlgisi", type: "ilgi", text: "Enerji, elektrik ve magnetizm konuları beni meraklandırır." },
    { id: 55, category: "Fen Bilimleri İlgisi", type: "ilgi", text: "Kimyasal tepkimeler gözlemek ve anlamak ilginç buluyorum." },
    { id: 56, category: "Fen Bilimleri İlgisi", type: "ilgi", text: "Harita, coğrafya ve jeoloji bilgisine sahip olmaktan hoşlanırım." },
    
    // SOSYAL BİLİMLER İLGİSİ (11 soru)
    { id: 57, category: "Sosyal Bilimler İlgisi", type: "ilgi", text: "Tarih ve geçmiş olaylar hakkında okumaktan keyif alırım." },
    { id: 58, category: "Sosyal Bilimler İlgisi", type: "ilgi", text: "Farklı kültür ve medeniyetler hakkında bilgi sahibi olmaktan hoşlanırım." },
    { id: 59, category: "Sosyal Bilimler İlgisi", type: "ilgi", text: "Politik olayları takip eder ve haber analiz ederim." },
    { id: 60, category: "Sosyal Bilimler İlgisi", type: "ilgi", text: "Arkeoloji ve antik medeniyetler beni çok ilgilendirir." },
    { id: 61, category: "Sosyal Bilimler İlgisi", type: "ilgi", text: "İnsanın davranış ve toplum yapısı konuları beni meraklandırır." },
    { id: 62, category: "Sosyal Bilimler İlgisi", type: "ilgi", text: "Felsefe ve etik soruları hakkında düşünmek severim." },
    { id: 63, category: "Sosyal Bilimler İlgisi", type: "ilgi", text: "Sosyoloji ve antropoloji konuları ilginç buluyorum." },
    { id: 64, category: "Sosyal Bilimler İlgisi", type: "ilgi", text: "Hukuk ve adalet sistemi hakkında bilgi edinmekten hoşlanırım." },
    { id: 65, category: "Sosyal Bilimler İlgisi", type: "ilgi", text: "Farklı yazı sistemleri ve diller hakkında merakım var." },
    { id: 66, category: "Sosyal Bilimler İlgisi", type: "ilgi", text: "Uluslararası ilişkiler ve jeopolitik konularını takip ederim." },
    { id: 67, category: "Sosyal Bilimler İlgisi", type: "ilgi", text: "Sanat tarihi ve kültürel mirasın korunması önemli buluyorum." },
    
    // İKNA İLGİSİ (11 soru)
    { id: 68, category: "İkna İlgisi", type: "ilgi", text: "İnsanları fikirlerime ikna etmekten zevk alırım." },
    { id: 69, category: "İkna İlgisi", type: "ilgi", text: "Tartışmalarda etkili argümanlar sunup kazanmayı severim." },
    { id: 70, category: "İkna İlgisi", type: "ilgi", text: "İnsan psikolojisini anlayıp kullanmakta iyiyim." },
    { id: 71, category: "İkna İlgisi", type: "ilgi", text: "Reklamcılık ve pazarlama stratejilerine ilgili olduğumu hissediyorum." },
    { id: 72, category: "İkna İlgisi", type: "ilgi", text: "Müzakere ve uzlaştırma süreçlerinde iyi bir rol oynayabilirim." },
    { id: 73, category: "İkna İlgisi", type: "ilgi", text: "İnsanları belli bir amaç etrafında toplayıp motivasyon sağlayabilir miyim?" },
    { id: 74, category: "İkna İlgisi", type: "ilgi", text: "Satış ve müşteri hizmetlerinde başarılı olabileceğimi düşünürüm." },
    { id: 75, category: "İkna İlgisi", type: "ilgi", text: "Propaganda ve toplumsal etkileme mekanizmalarını anlamak ilginç." },
    { id: 76, category: "İkna İlgisi", type: "ilgi", text: "Liderlik ve yönetim yeteneklerime güvenim tamdır." },
    { id: 77, category: "İkna İlgisi", type: "ilgi", text: "Halkla ilişkiler ve medya yönetimi konularında çalışabilirim." },
    { id: 78, category: "İkna İlgisi", type: "ilgi", text: "Politik kampanyalar ve seçim stratejileri hakkında merakım var." },
    
    // YABANCI DİL İLGİSİ (10 soru)
    { id: 79, category: "Yabancı Dil İlgisi", type: "ilgi", text: "Yabancı dil öğrenmeyi severim." },
    { id: 80, category: "Yabancı Dil İlgisi", type: "ilgi", text: "Farklı ülkelerin kültürü ve yaşam tarzı beni ilgilendirir." },
    { id: 81, category: "Yabancı Dil İlgisi", type: "ilgi", text: "Uluslararası iş ve ticaret alanında çalışabilecekmi? Evet diyorum." },
    { id: 82, category: "Yabancı Dil İlgisi", type: "ilgi", text: "Yabancı filmler ve diziler izleyip/okuyup metin anlamaktan hoşlanırım." },
    { id: 83, category: "Yabancı Dil İlgisi", type: "ilgi", text: "İthalatçı, ihracatçı veya turist rehberi olmayı hayal ederim." },
    { id: 84, category: "Yabancı Dil İlgisi", type: "ilgi", text: "Yabancı metin çevirmek ve dilbilim çalışmaları yapabilirim." },
    { id: 85, category: "Yabancı Dil İlgisi", type: "ilgi", text: "Dil öğrenme uygulamaları ve platformlarını kullanmaktan hoşlanırım." },
    { id: 86, category: "Yabancı Dil İlgisi", type: "ilgi", text: "Kendi ülkemin dışında yaşamak, gitmek, gezim kurmaktan bahsederim sık." },
    { id: 87, category: "Yabancı Dil İlgisi", type: "ilgi", text: "Evrensel iletişim kurabilmek için yabancı dil öğrenmeyi zorunlu buluyorum." },
    { id: 88, category: "Yabancı Dil İlgisi", type: "ilgi", text: "Belki de yabancı memleket işler ve ticaret sektörü benim alımıdır." },
    
    // TİCARET İLGİSİ (10 soru)
    { id: 89, category: "Ticaret İlgisi", type: "ilgi", text: "Pazarlama ve reklam stratejileriyle ilgilenirim." },
    { id: 90, category: "Ticaret İlgisi", type: "ilgi", text: "Para kazanmak ve yatırım yapmak hakkında düşünürüm." },
    { id: 91, category: "Ticaret İlgisi", type: "ilgi", text: "Girişimci olup kendi işletmemi kurmayı hayal ederim." },
    { id: 92, category: "Ticaret İlgisi", type: "ilgi", text: "Müşteri ilişkileri ve satış teknikleri beni ilgilendirir." },
    { id: 93, category: "Ticaret İlgisi", type: "ilgi", text: "Finansal analiz ve muhasebe konuları ilginç buluyorum." },
    { id: 94, category: "Ticaret İlgisi", type: "ilgi", text: "Borsa, kripto para ve yatırım araçlarını takip ederim." },
    { id: 95, category: "Ticaret İlgisi", type: "ilgi", text: "E-ticaret ve online işletme modelleri ilginç gelir bana." },
    { id: 96, category: "Ticaret İlgisi", type: "ilgi", text: "Lojistik ve tedarik zinciri yönetiminde çalışmaktan hoşlanabilirim." },
    { id: 97, category: "Ticaret İlgisi", type: "ilgi", text: "Ticari hukuk ve kontrat şartlarını anlamak zorundayım gibi hissediyorum." },
    { id: 98, category: "Ticaret İlgisi", type: "ilgi", text: "İthalatçı, ihracatçı olma hayalleri kurarım sık sık." },
    
    // ZİRAT İLGİSİ (10 soru)
    { id: 99, category: "Ziraat İlgisi", type: "ilgi", text: "Bitki yetiştirme ve bahçecilik beni ilgilendirir." },
    { id: 100, category: "Ziraat İlgisi", type: "ilgi", text: "Hayvancılık, tarım ve sürdürülebilir üretim konuları önemli buluyorum." },
    { id: 101, category: "Ziraat İlgisi", type: "ilgi", text: "Doğada zaman geçirmek ve toprakla çalışmaktan hoşlanırım." },
    { id: 102, category: "Ziraat İlgisi", type: "ilgi", text: "Organik tarım ve permakültür hakkında bilgi almak isterim." },
    { id: 103, category: "Ziraat İlgisi", type: "ilgi", text: "Balıkçılık, arıcılık veya balık üretimi (akuakültür) beni çekiyor." },
    { id: 104, category: "Ziraat İlgisi", type: "ilgi", text: "İklim değişikliğinin tarıma etkisini anlayıp çözüm sunmayı ilgilendirir." },
    { id: 105, category: "Ziraat İlgisi", type: "ilgi", text: "Tarım teknolojileri (drone, sensörler vb.) hakkında merakım var." },
    { id: 106, category: "Ziraat İlgisi", type: "ilgi", text: "Kırsal bölgelerde yaşamak ve çalışmaktan hoşlanabilirim." },
    { id: 107, category: "Ziraat İlgisi", type: "ilgi", text: "Gıda üretimi ve beslenme bilimi ilginç buluyorum." },
    { id: 108, category: "Ziraat İlgisi", type: "ilgi", text: "Tarımsal araştırmalar ve yeni tohumlar geliştirmek istiyor muyum?" },
    
    // MEKANİK İLGİ (10 soru)
    { id: 109, category: "Mekanik İlgi", type: "ilgi", text: "Makine ve motorlar hakkında bilgi öğrenmekten hoşlanırım." },
    { id: 110, category: "Mekanik İlgi", type: "ilgi", text: "Araçların çalışma prensiplerini anlamak isterim." },
    { id: 111, category: "Mekanik İlgi", type: "ilgi", text: "Tamir ve teknik işleri yapmaktan zevk alırım." },
    { id: 112, category: "Mekanik İlgi", type: "ilgi", text: "Oto elektrikçi, tesisatçı veya makinist gibi teknik işlerde çalışabilir miyim?" },
    { id: 113, category: "Mekanik İlgi", type: "ilgi", text: "Ağır makine operatörlüğü beni cezbediyor." },
    { id: 114, category: "Mekanik İlgi", type: "ilgi", text: "İnşaat makineleri ve harita aletlerini kullanmak ilginç buluyorum." },
    { id: 115, category: "Mekanik İlgi", type: "ilgi", text: "Endüstriyel makinelerin çalışmasını gözlemlemek ve analiz etmek isterim." },
    { id: 116, category: "Mekanik İlgi", type: "ilgi", text: "Robotik ve otomasyon teknolojileri beni ilgilendirir." },
    { id: 117, category: "Mekanik İlgi", type: "ilgi", text: "Kontrol sistemleri ve yönetim otomasyonu ilginç gelir." },
    { id: 118, category: "Mekanik İlgi", type: "ilgi", text: "Enerji üretim sistemleri ve elektrik jeneratörleri hakkında merakım var." },
    
    // İŞ AYRINTILARI İLGİSİ (10 soru)
    { id: 119, category: "İş Ayrıntıları İlgisi", type: "ilgi", text: "Düzgün, sistematik ve düzenli çalışmaktan hoşlanırım." },
    { id: 120, category: "İş Ayrıntıları İlgisi", type: "ilgi", text: "Hata yapmak benim için çok stres kaynağıdır." },
    { id: 121, category: "İş Ayrıntıları İlgisi", type: "ilgi", text: "Kalite kontrol ve verimlilik ölçmekten zevk alırım." },
    { id: 122, category: "İş Ayrıntıları İlgisi", type: "ilgi", text: "Yazılı kurallar ve prosedürleri takip etmek benim için önemlidir." },
    { id: 123, category: "İş Ayrıntıları İlgisi", type: "ilgi", text: "Veri girişi ve adminitratif işleri yapabilirim sorunsuzca." },
    { id: 124, category: "İş Ayrıntıları İlgisi", type: "ilgi", text: "Muhasebeci, mühendis veya teknisyen gibi hassas işleri yapabilirim." },
    { id: 125, category: "İş Ayrıntıları İlgisi", type: "ilgi", text: "Kontrol sayfaları ve belgeler doldurmak beni sorun etmez." },
    { id: 126, category: "İş Ayrıntıları İlgisi", type: "ilgi", text: "Hassas ölçüm ve kalibrasyonlar yapmaktan hoşlanırım." },
    { id: 127, category: "İş Ayrıntıları İlgisi", type: "ilgi", text: "İstatistik ve veri analizi yapmak ilginç buluyorum." },
    { id: 128, category: "İş Ayrıntıları İlgisi", type: "ilgi", text: "Ayakta mı oturarak mı çalışır olsam, detaylı işleri sevirim." },
    
    // EDEBİYAT İLGİSİ (10 soru)
    { id: 129, category: "Edebiyat İlgisi", type: "ilgi", text: "Kitap okumaktan çok hoşlanırım ve sık okurum." },
    { id: 130, category: "Edebiyat İlgisi", type: "ilgi", text: "Farklı edebi türleri (roman, şiir, hikaye vb.) severim." },
    { id: 131, category: "Edebiyat İlgisi", type: "ilgi", text: "Klasik ve modern edebiyat ürünlerini analiz etmek merak ediyorum." },
    { id: 132, category: "Edebiyat İlgisi", type: "ilgi", text: "Kendi hikaye, roman veya şiir yazma yeteneğine sahibim." },
    { id: 133, category: "Edebiyat İlgisi", type: "ilgi", text: "Yazar, editör veya kütüphaneci olma hayalim var." },
    { id: 134, category: "Edebiyat İlgisi", type: "ilgi", text: "İçindeki duygular ve fikirler beni yazı yazmaya iteliyor." },
    { id: 135, category: "Edebiyat İlgisi", type: "ilgi", text: "Sosyal medyada yazı paylaşmaktan ve yorum almaktan hoşlanırım." },
    { id: 136, category: "Edebiyat İlgisi", type: "ilgi", text: "Kitap gruplarına üye olup tartışmalar yapabilirim." },
    { id: 137, category: "Edebiyat İlgisi", type: "ilgi", text: "Metin yazarlığı ve seslendirme yapabilirim." },
    { id: 138, category: "Edebiyat İlgisi", type: "ilgi", text: "Telif hakları, basım ve yayın dünyası benim için ilginç." },
    
    // GÜZEL SANATLAR İLGİSİ (10 soru)
    { id: 139, category: "Güzel Sanatlar İlgisi", type: "ilgi", text: "Resim, heykel veya sanat eserleri beni çeker." },
    { id: 140, category: "Güzel Sanatlar İlgisi", type: "ilgi", text: "Ressam, heykeltıraş veya sanatçı olmak istiyorum." },
    { id: 141, category: "Güzel Sanatlar İlgisi", type: "ilgi", text: "Renk, form ve kompozisyon konularında tasarım yeteneklerim var." },
    { id: 142, category: "Güzel Sanatlar İlgisi", type: "ilgi", text: "Müze ve sanat galerilerine gitmeyi severim." },
    { id: 143, category: "Güzel Sanatlar İlgisi", type: "ilgi", text: "Grafik tasarım, animasyon veya dijital sanat yapabilirim." },
    { id: 144, category: "Güzel Sanatlar İlgisi", type: "ilgi", text: "Fotoğrafçılık ve görsel sanatlar beni ilgilendirir." },
    { id: 145, category: "Güzel Sanatlar İlgisi", type: "ilgi", text: "Sanat akımları ve sanat tarihi hakkında öğrenmek istiyorum." },
    { id: 146, category: "Güzel Sanatlar İlgisi", type: "ilgi", text: "Tasarım eleştirisi yaparak görüş sunabilirim." },
    { id: 147, category: "Güzel Sanatlar İlgisi", type: "ilgi", text: "Maddi olmayan sanatlar (seramik, tekstil vb.) ilginç gelir." },
    { id: 148, category: "Güzel Sanatlar İlgisi", type: "ilgi", text: "Kültür ve sanat alanında çalışmayı düşünüyorum." },
    
    // MÜZİK İLGİSİ (10 soru)
    { id: 149, category: "Müzik İlgisi", type: "ilgi", text: "Müzik dinlemek ve besteci dinlemekten hoşlanırım." },
    { id: 150, category: "Müzik İlgisi", type: "ilgi", text: "Müzik enstrümanı çalmak veya müzik öğrenmek istiyorum." },
    { id: 151, category: "Müzik İlgisi", type: "ilgi", text: "Müzisyen olma hayalim vardır." },
    { id: 152, category: "Müzik İlgisi", type: "ilgi", text: "Farklı müzik türlerine (klasik, rock, caz, rap vb.) ilgi duyarım." },
    { id: 153, category: "Müzik İlgisi", type: "ilgi", text: "Ses teknisyeni, müzik prodüktörü olabilir miyim?" },
    { id: 154, category: "Müzik İlgisi", type: "ilgi", text: "Müzik teorisi ve armoni hakkında merak duyarım." },
    { id: 155, category: "Müzik İlgisi", type: "ilgi", text: "Canlı konserler izlemek ve müzik festivallerine gitmek severim." },
    { id: 156, category: "Müzik İlgisi", type: "ilgi", text: "Müzik uygulamaları ve streming platformlarını sık kullanırım." },
    { id: 157, category: "Müzik İlgisi", type: "ilgi", text: "Müzik öğretmeni olarak çalışabilirim." },
    { id: 158, category: "Müzik İlgisi", type: "ilgi", text: "Sahne performansı ve konser kaygısı içinde değilim." },
    
    // SOSYAL YARDIM İLGİSİ (10 soru)
    { id: 159, category: "Sosyal Yardım İlgisi", type: "ilgi", text: "İnsanlara yardım etmek benim için çok önemlidir." },
    { id: 160, category: "Sosyal Yardım İlgisi", type: "ilgi", text: "Sosyal hizmet ve yardım faaliyetlerine katılmayı severim." },
    { id: 161, category: "Sosyal Yardım İlgisi", type: "ilgi", text: "Doktor, hemşire, psikolojik danışman gibi meslek seçebilirim." },
    { id: 162, category: "Sosyal Yardım İlgisi", type: "ilgi", text: "Gönüllü olmak ve sosyal projeler yürütmek benim için anlamlı." },
    { id: 163, category: "Sosyal Yardım İlgisi", type: "ilgi", text: "Huzur evleri, yetimhaneler veya hastanelerde çalışabilirim." },
    { id: 164, category: "Sosyal Yardım İlgisi", type: "ilgi", text: "Travma terapisi ve psikiyatrik bakım konuları ilginç buluyorum." },
    { id: 165, category: "Sosyal Yardım İlgisi", type: "ilgi", text: "Çocuk refahı ve aile danışmanlığında çalışmak isteyebilirim." },
    { id: 166, category: "Sosyal Yardım İlgisi", type: "ilgi", text: "Sosyal medyada insanların sorunlarını dinlemek istiyorum." },
    { id: 167, category: "Sosyal Yardım İlgisi", type: "ilgi", text: "Engelli ve yaşlı bakıcılığı yanında sosyal desteği de sağlayabilirim." },
    { id: 168, category: "Sosyal Yardım İlgisi", type: "ilgi", text: "Toplumsal refah ve adelet konuları beni ilgilendirir." },
    
    // Kalan 2 sorunun dağıtılması gerekiyor - Sosyal Yardım İlgisine ek
    { id: 169, category: "Sosyal Yardım İlgisi", type: "ilgi", text: "Insanlar arası ilişkileri anlamak ve bireylere rehberlik sunmaktan zevk alırım." },
    { id: 170, category: "Sosyal Yardım İlgisi", type: "ilgi", text: "Bir toplulukta ya da ekipte pozitif bir etki yaratmak benim için önemlidir." }
];
