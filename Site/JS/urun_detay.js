
const cicekVerileri = {
    "gul": {
        baslik: "GÜL",
        puan: 4.5,
        fiyat: 100,
        stok: "Son 20 Adet",
        resim: "images/rose.jpg"
    },
    "lale": {
        baslik: "LALE",
        puan: 3.5,
        fiyat: 150,
        stok: "Son 20 Adet",
        resim: "images/Tulipa_suaveolens_floriade_to_Canberra.jpg"
    },
    "lavanta": {
        baslik: "LAVANTA",
        puan: 5,
        fiyat: 300,
        stok: "Son 20 Adet",
        resim: "images/lavanta-cicegi.jpg"
    },
    "zambak": {
        baslik: "ZAMBAK",
        puan: 4.1,
        fiyat: 400,
        stok: "Son 20 Adet",
        resim: "images/lilia-bia-jak-uprawia-lili-bia-w-ogrodzie.jpg"
    },
    "papatya": {
        baslik: "PAPATYA",
        fiyat: 350,
        stok: "Son 20 Adet",
        resim: "images/papatya-cicegi-tohumu.webp"
    },
    "orkide": {
        baslik: "ORKİDE",
        puan: 5,
        fiyat: 1350,
        stok: "Son 20 Adet",
        resim: "images/Orkide.jpg"
    },
    "kasimpati": {
        baslik: "KASIMPATI",
        puan: 4.2,
        fiyat: 650,
        stok: "Son 20 Adet",
        resim: "images/kasimpati-krizantem-cicegi-bakimi-nasil-yapilir.webp"
    },
    "nergis": {
        baslik: "NERGİS",
        puan: 4,
        fiyat: 450,
        stok: "Son 20 Adet",
        resim: "images/nergis-cicegi.jpg"
    },
    "begonya": {
        baslik: "BEGONYA",
        puan: 4.7,
        fiyat: 500,
        stok: "Son 20 Adet",
        resim: "images/begonya-cicegi-bakimi-cogaltilmasi-sulama-teknikleri.webp"

    },
    "lilyum": {
        baslik: "LİLYUM",
        puan: 4.3,
        fiyat: 700,
        stok: "Son 20 Adet",
        resim: "images/liyum.jpg"
    },
    "leylak": {
        baslik: "LEYLAK",
        puan: 3.9,
        fiyat: 350,
        stok: "Son 20 Adet",
        resim: "images/leylak.jpg"
    },
    "iris": {
        baslik: "İRİS",
        puan: 5,
        fiyat: 850,
        stok: "Son 20 Adet",
        resim: "images/Iris_sanguinea_cultivar,_Wakehurst_Place,_UK_-_Diliff.jpg"
    },
    "sümbül": {
        baslik: "SÜMBÜL",
        puan: 4,
        fiyat: 250,
        stok: "Son 20 Adet",
        resim: "images/sümbül.jpg"
    },
    "lisyantus": {
        baslik: "LİSYANTUS",
        puan: 4.8,
        fiyat: 900,
        stok: "Son 20 Adet",
        resim: "images/874184179lisyantuscicegilisianthus.jpg"
    },
    "lotus": {
        baslik: "LOTUS",
        puan: 5,
        fiyat: 200,
        stok: "Son 20 Adet",
        resim: "images/lotus.jpeg"
    }
};



function detaySayfasiniYukle() {
    const urlParametreleri = new URLSearchParams(window.location.search);
    const cicekId = urlParametreleri.get('id'); // örn: "gul"

    const detayAlani = document.getElementById('urunDetayAlani');
    if (cicekId && cicekVerileri[cicekId]) {
        const urun = cicekVerileri[cicekId];
        // let starHtml;

        // for (let index = 0; index < urun.puan; index++) {
        //     starHtml += <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
        //         <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
        //     </svg>
        // }
        // HTML içeriği
        const icerikHTML = `
            <img id="zoom_01" class="flower" src="${urun.resim}" alt="${urun.baslik}" />
            <div class="FlowerDesignText">
                <h2 style="margin: 0px; margin-bottom: 10px; color: brown;">${urun.baslik}</h2>
                <p>Değerlendirme Puanı: ${urun.puan}</p>
                <p style="margin-bottom:120px;">Ürün Fiyatı: ${urun.fiyat} ₺</p>
          <a href="siparisonay.html"><button class="order-btn" style="">Sipariş Ver</button></a>      
            </div>
        `;
        
        
        function arkaPlanRenginiDegistir() {
    document.body.style.backgroundColor = "white";  
}

        // detay alanına içeriği yerleştiriyorum
        detayAlani.innerHTML = icerikHTML;
    } else {

        detayAlani.innerHTML = "<h2>Hata: Ürün bulunamadı veya ID eksik.</h2><p>Lütfen ana sayfaya geri dönün.</p>";
    }
}


window.onload = detaySayfasiniYukle;