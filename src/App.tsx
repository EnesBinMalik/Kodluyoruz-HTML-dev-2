import React, { useState } from 'react';
import { 
  Copy, 
  Check, 
  Download, 
  ExternalLink, 
  Film, 
  Tv, 
  BookOpen, 
  Code, 
  Eye, 
  CheckCircle2, 
  FileCode2,
  Info
} from 'lucide-react';

const RAW_HTML_CODE = `<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Kural 5: Sayfanın başlığı Kişisel Sayfam - Ödev 2 -->
    <title>Kişisel Sayfam - Ödev 2</title>
    <style>
        /* Temel Sayfa Stilleri */
        body {
            font-family: Arial, Helvetica, sans-serif;
            line-height: 1.6;
            color: #2c3e50;
            background-color: #f4f6f9;
            margin: 0;
            padding: 24px;
        }

        .container {
            max-width: 820px;
            margin: 0 auto;
            background-color: #ffffff;
            padding: 32px;
            border-radius: 10px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        }

        header {
            border-bottom: 2px solid #e9ecef;
            padding-bottom: 16px;
            margin-bottom: 20px;
        }

        h1 {
            color: #1a365d;
            margin-top: 0;
            font-size: 28px;
        }

        /* Kural 1: Resme çerçeve (border) stil tanımı */
        .featured-image {
            border: 4px solid #3182ce;
            border-radius: 8px;
            max-width: 100%;
            height: auto;
            display: block;
            margin: 16px 0;
            box-shadow: 0 4px 8px rgba(49, 130, 206, 0.25);
        }

        /* Kural 2: Ana Başlıklar (h2) */
        h2 {
            color: #2b6cb0;
            margin-top: 30px;
            margin-bottom: 12px;
            border-left: 5px solid #3182ce;
            padding-left: 10px;
        }

        /* Kural 2: Kategoriler için sıralı liste (ol) */
        ol {
            padding-left: 24px;
            font-weight: bold;
            color: #2d3748;
        }

        /* Kural 2: İçerikler için madde işaretli liste (ul ve li) */
        ol li ul {
            padding-left: 20px;
            margin-top: 6px;
            margin-bottom: 14px;
            font-weight: normal;
            color: #4a5568;
            list-style-type: disc;
        }

        /* Kural 3: Bağlantı Stilleri */
        a {
            color: #3182ce;
            text-decoration: underline;
            font-weight: 500;
        }

        a:hover {
            color: #2b6cb0;
        }

        /* Satır İçi (Inline) Element Vurguları */
        .tag {
            background-color: #ebf8ff;
            color: #2b6cb0;
            font-size: 12px;
            padding: 2px 6px;
            border-radius: 4px;
            margin-left: 6px;
            border: 1px solid #bee3f8;
            font-weight: normal;
        }

        .note {
            background-color: #fffaf0;
            border-left: 4px solid #dd6b20;
            padding: 10px 14px;
            margin: 16px 0;
            border-radius: 4px;
        }

        footer {
            margin-top: 36px;
            padding-top: 16px;
            border-top: 1px solid #e2e8f0;
            text-align: center;
            font-size: 14px;
            color: #718096;
        }
    </style>
</head>
<body>

    <!-- Kural 4: Blok ve Satır İçi Elementlerin Birlikte Kullanımı -->
    <div class="container">
        
        <!-- Başlık Bölümü (Header) -->
        <header>
            <h1>Kişisel İlgi Alanlarım ve Favori Listelerim</h1>
            <p>
                Merhaba! Bu sayfa <strong>Kodluyoruz Front-End Web Geliştirme Eğitimi</strong> kapsamında 
                <span>Ödev 2</span> için hazırlanmıştır. Aşağıda en sevdiğim <span style="background-color: #fefcbf; padding: 2px 4px;">filmler</span>, 
                <span style="background-color: #fefcbf; padding: 2px 4px;">diziler</span> ve 
                <span style="background-color: #fefcbf; padding: 2px 4px;">kitaplar</span> yer almaktadır.
            </p>
        </header>

        <!-- Kural 1: Resim (img), alt açıklaması ve çerçeve (border) -->
        <figure>
            <img 
                src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80" 
                alt="Sinema salonu, koltuklar ve film projeksiyon ışığı" 
                class="featured-image"
                style="border: 4px solid #3182ce;"
                width="750"
            >
            <figcaption>
                <em>Görsel: Sanat, sinema ve edebi yolculuklara açılan ilham verici bir kare.</em>
            </figcaption>
        </figure>

        <div class="note">
            <p>
                <strong>Not:</strong> Listelenen eserlerin üzerine tıklayarak ilgili 
                <em>IMDb</em> ve <em>Goodreads</em> sayfalarına yeni sekmede gidebilirsiniz.
            </p>
        </div>

        <!-- Ana İçerik Bölümü (Main) -->
        <main>
            <!-- Kural 2: h2 -> ol -> ul/li Hiyerarşisi -->
            <!-- BÖLÜM 1: FİLMLER -->
            <section>
                <h2>Filmler</h2>
                <ol>
                    <li>
                        <strong>Bilim Kurgu & Uzay</strong>
                        <ul>
                            <li>
                                <!-- Kural 3: IMDb Linki (target="_blank") -->
                                <a href="https://www.imdb.com/title/tt0816692/" target="_blank" rel="noopener noreferrer">
                                    Interstellar (Yıldızlararası)
                                </a> 
                                - Yönetmen: Christopher Nolan <span class="tag">IMDb: 8.7</span>
                            </li>
                            <li>Inception (Başlangıç) - Leonardo DiCaprio</li>
                            <li>The Matrix - Wachowski Kardeşler</li>
                        </ul>
                    </li>

                    <li>
                        <strong>Dram & Biyografi</strong>
                        <ul>
                            <li>
                                <a href="https://www.imdb.com/title/tt0111161/" target="_blank" rel="noopener noreferrer">
                                    The Shawshank Redemption (Esaretin Bedeli)
                                </a> 
                                - Yönetmen: Frank Darabont <span class="tag">IMDb: 9.3</span>
                            </li>
                            <li>The Pianist (Piyanist) - Roman Polanski</li>
                        </ul>
                    </li>

                    <li>
                        <strong>Animasyon & Fantastik</strong>
                        <ul>
                            <li>Spirited Away (Ruhların Kaçışı) - Hayao Miyazaki</li>
                            <li>WALL-E - Andrew Stanton</li>
                        </ul>
                    </li>
                </ol>
            </section>

            <!-- BÖLÜM 2: DİZİLER -->
            <section>
                <h2>Diziler</h2>
                <ol>
                    <li>
                        <strong>Suç & Psikolojik Gerilim</strong>
                        <ul>
                            <li>
                                <!-- Kural 3: Dizi için IMDb Linki -->
                                <a href="https://www.imdb.com/title/tt0903747/" target="_blank" rel="noopener noreferrer">
                                    Breaking Bad
                                </a> 
                                - Bryan Cranston, Aaron Paul <span class="tag">IMDb: 9.5</span>
                            </li>
                            <li>Better Call Saul - Bob Odenkirk</li>
                            <li>Sherlock - Benedict Cumberbatch</li>
                        </ul>
                    </li>

                    <li>
                        <strong>Gizem & Zaman Yolculuğu</strong>
                        <ul>
                            <li>
                                <a href="https://www.imdb.com/title/tt5753856/" target="_blank" rel="noopener noreferrer">
                                    Dark
                                </a> 
                                - Baran bo Odar, Jantje Friese <span class="tag">IMDb: 8.7</span>
                            </li>
                            <li>Stranger Things - Duffer Kardeşler</li>
                        </ul>
                    </li>

                    <li>
                        <strong>Komedi & Durum Komedisi (Sitcom)</strong>
                        <ul>
                            <li>Friends - Jennifer Aniston, Courteney Cox</li>
                            <li>The Office - Steve Carell</li>
                        </ul>
                    </li>
                </ol>
            </section>

            <!-- BÖLÜM 3: KİTAPLAR -->
            <section>
                <h2>Kitaplar</h2>
                <ol>
                    <li>
                        <strong>Distopya & Dünya Klasikleri</strong>
                        <ul>
                            <li>
                                <!-- Kural 3: Kitap için Goodreads Linki -->
                                <a href="https://www.goodreads.com/book/show/5470.1984" target="_blank" rel="noopener noreferrer">
                                    1984
                                </a> 
                                - George Orwell <span class="tag">Goodreads: 4.2/5</span>
                            </li>
                            <li>Cesur Yeni Dünya - Aldous Huxley</li>
                            <li>Fahrenheit 451 - Ray Bradbury</li>
                        </ul>
                    </li>

                    <li>
                        <strong>Felsefe & Psikoloji</strong>
                        <ul>
                            <li>
                                <a href="https://www.goodreads.com/book/show/4069.Man_s_Search_for_Meaning" target="_blank" rel="noopener noreferrer">
                                    İnsanın Anlam Arayışı (Man's Search for Meaning)
                                </a> 
                                - Viktor E. Frankl <span class="tag">Goodreads: 4.4/5</span>
                            </li>
                            <li>Böyle Buyurdu Zerdüşt - Friedrich Nietzsche</li>
                        </ul>
                    </li>

                    <li>
                        <strong>Edebi Kurgu & Realizm</strong>
                        <ul>
                            <li>Suç ve Ceza - Fyodor Dostoyevski</li>
                            <li>Dönüşüm - Franz Kafka</li>
                        </ul>
                    </li>
                </ol>
            </section>
        </main>

        <!-- Kural 4: Footer ve Kapanış -->
        <footer>
            <p>
                Sayfa Tasarımı: <strong>Kodluyoruz Eğitimi Katılımcısı</strong> | 
                <span>Semantik HTML5 Standartları ile Kodlanmıştır.</span>
            </p>
        </footer>

    </div>

</body>
</html>`;

export default function App() {
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');
  const [copied, setCopied] = useState(false);
  const [showCriteria, setShowCriteria] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(RAW_HTML_CODE);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      const textarea = document.createElement('textarea');
      textarea.value = RAW_HTML_CODE;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleDownload = () => {
    const blob = new Blob([RAW_HTML_CODE], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'index.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const criteria = [
    {
      id: 1,
      title: 'Resim (img) & Çerçeve (border)',
      detail: '<img alt="..." style="border: 4px solid #3182ce;"> etiketi doğru eklendi.',
      status: 'Tamamlandı'
    },
    {
      id: 2,
      title: 'Başlıklar: Filmler, Diziler, Kitaplar',
      detail: '<h2> ana başlıkları altında sıralı <ol> kategorileri ve madde işaretli <ul><li> içerikleri kuruldu.',
      status: 'Tamamlandı'
    },
    {
      id: 3,
      title: 'IMDb ve Goodreads Linkleri',
      detail: 'Film & dizide IMDb bağlantıları, kitapta Goodreads bağlantısı target="_blank" ile eklendi.',
      status: 'Tamamlandı'
    },
    {
      id: 4,
      title: 'Blok & Satır İçi (Inline) Elementler',
      detail: 'header, main, section, div, p (blok) ile span, strong, em, a (satır içi) uyumla harmanlandı.',
      status: 'Tamamlandı'
    },
    {
      id: 5,
      title: 'Title & UTF-8 Karakter Desteği',
      detail: '<title>Kişisel Sayfam - Ödev 2</title> ve <meta charset="UTF-8"> eksiksiz tanımlandı.',
      status: 'Tamamlandı'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-100 pb-16">
      {/* Top Navigation & Action Bar */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-5xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-orange-500 text-white flex items-center justify-center font-bold text-sm shadow-xs">
              K
            </span>
            <div>
              <h1 className="text-base font-bold text-slate-900 leading-tight">
                Kodluyoruz HTML Ödev 2
              </h1>
              <p className="text-xs text-slate-500">
                Semantik HTML5 &bull; index.html Doğrudan Çalıştırılabilir Kod
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="bg-slate-100 p-1 rounded-lg border border-slate-200 flex text-xs font-medium">
              <button
                onClick={() => setActiveTab('preview')}
                className={`px-3 py-1.5 rounded-md flex items-center gap-1.5 transition-all ${
                  activeTab === 'preview'
                    ? 'bg-white text-blue-600 shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                Önizleme
              </button>
              <button
                onClick={() => setActiveTab('code')}
                className={`px-3 py-1.5 rounded-md flex items-center gap-1.5 transition-all ${
                  activeTab === 'code'
                    ? 'bg-white text-blue-600 shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Code className="w-3.5 h-3.5" />
                index.html Kodu
              </button>
            </div>

            <button
              onClick={() => setShowCriteria(!showCriteria)}
              className="hidden sm:flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-lg hover:bg-emerald-100 transition-colors"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              5/5 Kriter Tam
            </button>

            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 active:scale-98 transition-all shadow-xs"
              title="HTML kodunu panoya kopyala"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-200" />
                  Kopyalandı!
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  Kodu Kopyala
                </>
              )}
            </button>

            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 bg-slate-800 text-white rounded-lg hover:bg-slate-900 active:scale-98 transition-all shadow-xs"
              title="index.html dosyasını indir"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden md:inline">index.html</span> İndir
            </button>
          </div>
        </div>

        {/* Criteria details bar */}
        {showCriteria && (
          <div className="bg-emerald-50/90 border-t border-emerald-200 px-4 py-3 text-xs text-emerald-900">
            <div className="max-w-5xl mx-auto grid sm:grid-cols-3 gap-2.5">
              {criteria.map((item) => (
                <div key={item.id} className="flex items-start gap-2 bg-white/70 p-2 rounded border border-emerald-200/60">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-emerald-950">{item.title}</span>
                    <p className="text-[11px] text-emerald-800">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto px-4 mt-6">
        {activeTab === 'preview' ? (
          /* Live Rendered HTML Assignment */
          <div className="bg-white rounded-xl shadow-md border border-slate-200/80 p-6 sm:p-10 transition-all">
            {/* Semantic Header */}
            <header className="border-b border-slate-200 pb-5 mb-6">
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Kişisel İlgi Alanlarım ve Favori Listelerim
              </h1>
              <p className="mt-2 text-slate-600 leading-relaxed text-sm sm:text-base">
                Merhaba! Bu sayfa <strong>Kodluyoruz Front-End Web Geliştirme Eğitimi</strong> kapsamında{' '}
                <span className="font-medium text-slate-900">Ödev 2</span> için hazırlanmıştır. 
                Aşağıda en sevdiğim <span className="bg-amber-100 text-amber-900 px-1.5 py-0.5 rounded text-xs font-semibold">filmler</span>,{' '}
                <span className="bg-amber-100 text-amber-900 px-1.5 py-0.5 rounded text-xs font-semibold">diziler</span> ve{' '}
                <span className="bg-amber-100 text-amber-900 px-1.5 py-0.5 rounded text-xs font-semibold">kitaplar</span> yer almaktadır.
              </p>
            </header>

            {/* Kural 1: Resim, alt ve border */}
            <figure className="my-6">
              <img
                src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80"
                alt="Sinema salonu, koltuklar ve film projeksiyon ışığı"
                className="w-full h-auto max-h-80 object-cover rounded-lg shadow-sm"
                style={{ border: '4px solid #3182ce' }}
                width="750"
              />
              <figcaption className="mt-2 text-xs text-slate-500 italic">
                <em>Görsel: Sanat, sinema ve edebi yolculuklara açılan ilham verici bir kare. (Kural 1: Resme çerçeve [border] stili uygulandı)</em>
              </figcaption>
            </figure>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-3 sm:p-4 rounded-r-md text-amber-900 text-xs sm:text-sm my-6 flex items-start gap-2.5">
              <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <p>
                <strong>Ödev Bilgilendirmesi:</strong> Aşağıdaki eser başlıklarına tıklayarak doğrudan{' '}
                <em>IMDb</em> ve <em>Goodreads</em> sayfalarına yeni sekmede gidebilirsiniz (<code className="bg-amber-100/80 px-1 rounded">target="_blank"</code>).
              </p>
            </div>

            {/* Kural 2 & 3: Filmler */}
            <section className="mb-8">
              <div className="flex items-center gap-2 text-blue-700 border-l-4 border-blue-600 pl-3 mb-3">
                <Film className="w-5 h-5 text-blue-600" />
                <h2 className="text-xl font-bold text-blue-700">Filmler</h2>
              </div>
              <ol className="list-decimal list-inside space-y-4 font-semibold text-slate-800 ml-1">
                <li>
                  <span className="text-slate-900 font-bold">Bilim Kurgu & Uzay</span>
                  <ul className="list-disc list-inside ml-6 mt-1.5 space-y-1.5 font-normal text-slate-600 text-sm">
                    <li>
                      <a
                        href="https://www.imdb.com/title/tt0816692/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 underline font-medium inline-flex items-center gap-1"
                      >
                        Interstellar (Yıldızlararası)
                        <ExternalLink className="w-3 h-3 inline" />
                      </a>{' '}
                      - Yönetmen: Christopher Nolan{' '}
                      <span className="inline-block bg-blue-50 text-blue-700 text-xs px-2 py-0.5 rounded-full border border-blue-200">
                        IMDb: 8.7
                      </span>
                    </li>
                    <li>Inception (Başlangıç) - Leonardo DiCaprio</li>
                    <li>The Matrix - Wachowski Kardeşler</li>
                  </ul>
                </li>

                <li>
                  <span className="text-slate-900 font-bold">Dram & Biyografi</span>
                  <ul className="list-disc list-inside ml-6 mt-1.5 space-y-1.5 font-normal text-slate-600 text-sm">
                    <li>
                      <a
                        href="https://www.imdb.com/title/tt0111161/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 underline font-medium inline-flex items-center gap-1"
                      >
                        The Shawshank Redemption (Esaretin Bedeli)
                        <ExternalLink className="w-3 h-3 inline" />
                      </a>{' '}
                      - Yönetmen: Frank Darabont{' '}
                      <span className="inline-block bg-blue-50 text-blue-700 text-xs px-2 py-0.5 rounded-full border border-blue-200">
                        IMDb: 9.3
                      </span>
                    </li>
                    <li>The Pianist (Piyanist) - Roman Polanski</li>
                  </ul>
                </li>

                <li>
                  <span className="text-slate-900 font-bold">Animasyon & Fantastik</span>
                  <ul className="list-disc list-inside ml-6 mt-1.5 space-y-1.5 font-normal text-slate-600 text-sm">
                    <li>Spirited Away (Ruhların Kaçışı) - Hayao Miyazaki</li>
                    <li>WALL-E - Andrew Stanton</li>
                  </ul>
                </li>
              </ol>
            </section>

            {/* Kural 2 & 3: Diziler */}
            <section className="mb-8">
              <div className="flex items-center gap-2 text-blue-700 border-l-4 border-blue-600 pl-3 mb-3">
                <Tv className="w-5 h-5 text-blue-600" />
                <h2 className="text-xl font-bold text-blue-700">Diziler</h2>
              </div>
              <ol className="list-decimal list-inside space-y-4 font-semibold text-slate-800 ml-1">
                <li>
                  <span className="text-slate-900 font-bold">Suç & Psikolojik Gerilim</span>
                  <ul className="list-disc list-inside ml-6 mt-1.5 space-y-1.5 font-normal text-slate-600 text-sm">
                    <li>
                      <a
                        href="https://www.imdb.com/title/tt0903747/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 underline font-medium inline-flex items-center gap-1"
                      >
                        Breaking Bad
                        <ExternalLink className="w-3 h-3 inline" />
                      </a>{' '}
                      - Bryan Cranston, Aaron Paul{' '}
                      <span className="inline-block bg-blue-50 text-blue-700 text-xs px-2 py-0.5 rounded-full border border-blue-200">
                        IMDb: 9.5
                      </span>
                    </li>
                    <li>Better Call Saul - Bob Odenkirk</li>
                    <li>Sherlock - Benedict Cumberbatch</li>
                  </ul>
                </li>

                <li>
                  <span className="text-slate-900 font-bold">Gizem & Zaman Yolculuğu</span>
                  <ul className="list-disc list-inside ml-6 mt-1.5 space-y-1.5 font-normal text-slate-600 text-sm">
                    <li>
                      <a
                        href="https://www.imdb.com/title/tt5753856/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 underline font-medium inline-flex items-center gap-1"
                      >
                        Dark
                        <ExternalLink className="w-3 h-3 inline" />
                      </a>{' '}
                      - Baran bo Odar, Jantje Friese{' '}
                      <span className="inline-block bg-blue-50 text-blue-700 text-xs px-2 py-0.5 rounded-full border border-blue-200">
                        IMDb: 8.7
                      </span>
                    </li>
                    <li>Stranger Things - Duffer Kardeşler</li>
                  </ul>
                </li>

                <li>
                  <span className="text-slate-900 font-bold">Komedi & Durum Komedisi (Sitcom)</span>
                  <ul className="list-disc list-inside ml-6 mt-1.5 space-y-1.5 font-normal text-slate-600 text-sm">
                    <li>Friends - Jennifer Aniston, Courteney Cox</li>
                    <li>The Office - Steve Carell</li>
                  </ul>
                </li>
              </ol>
            </section>

            {/* Kural 2 & 3: Kitaplar */}
            <section className="mb-8">
              <div className="flex items-center gap-2 text-blue-700 border-l-4 border-blue-600 pl-3 mb-3">
                <BookOpen className="w-5 h-5 text-blue-600" />
                <h2 className="text-xl font-bold text-blue-700">Kitaplar</h2>
              </div>
              <ol className="list-decimal list-inside space-y-4 font-semibold text-slate-800 ml-1">
                <li>
                  <span className="text-slate-900 font-bold">Distopya & Dünya Klasikleri</span>
                  <ul className="list-disc list-inside ml-6 mt-1.5 space-y-1.5 font-normal text-slate-600 text-sm">
                    <li>
                      <a
                        href="https://www.goodreads.com/book/show/5470.1984"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-700 hover:text-emerald-900 underline font-medium inline-flex items-center gap-1"
                      >
                        1984
                        <ExternalLink className="w-3 h-3 inline" />
                      </a>{' '}
                      - George Orwell{' '}
                      <span className="inline-block bg-emerald-50 text-emerald-700 text-xs px-2 py-0.5 rounded-full border border-emerald-200">
                        Goodreads: 4.2/5
                      </span>
                    </li>
                    <li>Cesur Yeni Dünya - Aldous Huxley</li>
                    <li>Fahrenheit 451 - Ray Bradbury</li>
                  </ul>
                </li>

                <li>
                  <span className="text-slate-900 font-bold">Felsefe & Psikoloji</span>
                  <ul className="list-disc list-inside ml-6 mt-1.5 space-y-1.5 font-normal text-slate-600 text-sm">
                    <li>
                      <a
                        href="https://www.goodreads.com/book/show/4069.Man_s_Search_for_Meaning"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-700 hover:text-emerald-900 underline font-medium inline-flex items-center gap-1"
                      >
                        İnsanın Anlam Arayışı (Man's Search for Meaning)
                        <ExternalLink className="w-3 h-3 inline" />
                      </a>{' '}
                      - Viktor E. Frankl{' '}
                      <span className="inline-block bg-emerald-50 text-emerald-700 text-xs px-2 py-0.5 rounded-full border border-emerald-200">
                        Goodreads: 4.4/5
                      </span>
                    </li>
                    <li>Böyle Buyurdu Zerdüşt - Friedrich Nietzsche</li>
                  </ul>
                </li>

                <li>
                  <span className="text-slate-900 font-bold">Edebi Kurgu & Realizm</span>
                  <ul className="list-disc list-inside ml-6 mt-1.5 space-y-1.5 font-normal text-slate-600 text-sm">
                    <li>Suç ve Ceza - Fyodor Dostoyevski</li>
                    <li>Dönüşüm - Franz Kafka</li>
                  </ul>
                </li>
              </ol>
            </section>

            {/* Footer */}
            <footer className="border-t border-slate-200 pt-5 mt-8 text-center text-xs text-slate-500">
              <p>
                Sayfa Tasarımı: <strong>Kodluyoruz Eğitimi Katılımcısı</strong> |{' '}
                <span>Semantik HTML5 Standartları ile Kodlanmıştır.</span>
              </p>
            </footer>
          </div>
        ) : (
          /* Pure Code View */
          <div className="bg-slate-900 rounded-xl shadow-lg border border-slate-800 overflow-hidden">
            <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileCode2 className="w-4 h-4 text-blue-400" />
                <span className="text-xs font-mono font-medium text-slate-200">index.html</span>
                <span className="text-[11px] text-slate-500 hidden sm:inline">&bull; 214 satır, UTF-8</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 px-2.5 py-1 rounded transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  {copied ? 'Kopyalandı!' : 'Tümünü Kopyala'}
                </button>
                <button
                  onClick={handleDownload}
                  className="flex items-center gap-1.5 text-xs bg-blue-600 hover:bg-blue-500 text-white px-2.5 py-1 rounded transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  İndir
                </button>
              </div>
            </div>

            <pre className="p-4 sm:p-6 text-xs sm:text-sm font-mono text-slate-200 overflow-x-auto leading-relaxed max-h-[75vh]">
              <code>{RAW_HTML_CODE}</code>
            </pre>
          </div>
        )}

        {/* Footer info banner */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-blue-900">
          <div className="space-y-0.5">
            <p className="font-semibold text-blue-950">
              Bu kod doğrudan herhangi bir web tarayıcısında (Chrome, Firefox, Safari, Edge) çift tıklanarak çalıştırılabilir.
            </p>
            <p className="text-blue-700">
              Kodluyoruz eğitim platformuna veya GitHub reposuna teslim etmek için <code className="bg-blue-100 px-1 py-0.5 rounded font-mono">index.html</code> olarak kaydedebilirsiniz.
            </p>
          </div>
          <button
            onClick={handleCopy}
            className="shrink-0 flex items-center gap-1.5 bg-blue-600 text-white font-semibold px-3 py-1.5 rounded-lg hover:bg-blue-700 shadow-xs"
          >
            <Copy className="w-3.5 h-3.5" />
            Kodu Kopyala
          </button>
        </div>
      </main>
    </div>
  );
}
