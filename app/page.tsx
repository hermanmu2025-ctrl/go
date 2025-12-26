import { Timer, Trophy, Calendar, Zap } from 'lucide-react';

// Simulasi pengambilan data dari API
async function getLotteryData() {
  // Catatan: Pastikan process.env.API_KEY valid jika menggunakan API riil
  return [
    { id: 'SGP', name: 'SINGAPORE', results: ['12', '45', '89', '02'], date: '2025-05-24', status: 'Selesai' },
    { id: 'HK', name: 'HONGKONG', results: ['77', '10', '34', '56'], date: '2025-05-24', status: 'Selesai' },
    { id: 'SDY', name: 'SYDNEY', results: ['09', '21', '66', '43'], date: '2025-05-24', status: 'Selesai' },
    { id: 'MC', name: 'MACAU', results: ['Pending'], date: '2025-05-25', status: 'Live' },
  ];
}

export default async function HomePage() {
  const data = await getLotteryData();

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="bg-brand rounded-3xl p-8 mb-12 text-white relative overflow-hidden shadow-2xl shadow-brand/20">
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center">
          <div>
            <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-bold mb-4 inline-block">LIVE UPDATE</span>
            <h2 className="text-4xl font-black mb-2">HASIL TERCEPAT HARI INI</h2>
            <p className="opacity-90">Data keluaran angka akurat dari seluruh pasaran dunia.</p>
          </div>
          <div className="mt-6 md:mt-0 flex gap-4">
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl text-center border border-white/20">
              <p className="text-[10px] uppercase font-bold opacity-70">Next Draw</p>
              <p className="text-xl font-mono font-bold">14:00:22</p>
            </div>
          </div>
        </div>
        <Zap className="absolute -bottom-10 -right-10 w-64 h-64 opacity-10 rotate-12" />
      </section>

      {/* Grid Results */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item) => (
          <div key={item.id} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition group">
            <div className="bg-slate-50 p-4 border-b border-slate-100 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-brand animate-pulse" />
                <h3 className="font-bold text-slate-700 uppercase">{item.name}</h3>
              </div>
              <span className="text-[10px] bg-slate-200 px-2 py-1 rounded-md font-bold text-slate-500 tracking-wider">
                {item.id}
              </span>
            </div>
            
            <div className="p-6">
              <div className="flex justify-center gap-3 mb-6">
                {item.results[0] === 'Pending' ? (
                  <div className="text-slate-400 italic flex items-center gap-2">
                    <Timer size={16} /> Menunggu Result...
                  </div>
                ) : (
                  item.results.map((num, idx) => (
                    <div key={idx} className="w-12 h-12 flex items-center justify-center rounded-full ball-gradient border-2 border-slate-100 text-slate-800 font-black text-xl shadow-inner">
                      {num}
                    </div>
                  ))
                )}
              </div>
              
              <div className="flex items-center justify-between text-xs text-slate-500 border-t pt-4">
                <div className="flex items-center gap-1">
                  <Calendar size={14} /> {item.date}
                </div>
                <div className="flex items-center gap-1 font-semibold text-brand">
                  <Trophy size={14} /> Rekap Data
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Info Section */}
      <section className="mt-12 bg-white p-8 rounded-2xl border border-slate-200">
        <h4 className="text-xl font-bold mb-4 flex items-center gap-2 text-dark">
          Tentang TogelPro
        </h4>
        <p className="text-slate-600 leading-relaxed text-sm">
          TogelPro adalah platform penyedia hasil keluaran togel online tercepat. Kami mengintegrasikan data langsung dari provider resmi untuk memastikan akurasi 100%. Dilengkapi dengan fitur rekap data 30 hari terakhir dan prediksi harian berbasis algoritma statistik terbaru.
        </p>
      </section>
    </main>
  );
}