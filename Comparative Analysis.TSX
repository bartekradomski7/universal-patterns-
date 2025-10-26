import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, LineChart, Line, ScatterChart, Scatter, ZAxis } from 'recharts';
import { TrendingUp, Zap, DollarSign, Wrench, Shield, Cpu, Battery, Car, Factory } from 'lucide-react';

const MaterialComparison = () => {
  const [activeTab, setActiveTab] = useState('conductivity');

  // Dane przewodności
  const conductivityData = [
    { material: 'Srebro (Ag)', value: 63.0, iacs: 105, color: '#C0C0C0' },
    { material: 'Cu-Mg-Carbon', value: 65.5, iacs: 110, color: '#FF6B35' },
    { material: 'Miedź (Cu)', value: 59.6, iacs: 100, color: '#B87333' },
    { material: 'Złoto (Au)', value: 45.2, iacs: 76, color: '#FFD700' },
    { material: 'Aluminium (Al)', value: 37.7, iacs: 63, color: '#A8A9AD' }
  ];

  // Porównanie właściwości
  const propertiesComparison = [
    { property: 'Przewodność', Srebro: 105, CuMgCarbon: 110, max: 120 },
    { property: 'Wytrzymałość', Srebro: 25, CuMgCarbon: 95, max: 100 },
    { property: 'Stabilność term.', Srebro: 70, CuMgCarbon: 95, max: 100 },
    { property: 'Odporność kor.', Srebro: 95, CuMgCarbon: 75, max: 100 },
    { property: 'Ciągliwość', Srebro: 80, CuMgCarbon: 70, max: 100 },
    { property: 'Koszt-efektyw.', Srebro: 18, CuMgCarbon: 95, max: 100 }
  ];

  // Analiza kosztów
  const costAnalysis = [
    { aspect: 'Cena surowca', Srebro: 480, CuMgCarbon: 31.86 },
    { aspect: 'Koszt produkcji', Srebro: 520, CuMgCarbon: 86.86 },
    { aspect: 'Koszt instalacji', Srebro: 550, CuMgCarbon: 95 },
    { aspect: 'Koszt eksploat.', Srebro: 480, CuMgCarbon: 75 }
  ];

  // Zastosowania przemysłowe
  const applications = [
    {
      sector: 'Elektronika',
      icon: Cpu,
      current: 'Srebro',
      new: 'Cu-Mg-Carbon',
      savings: '82%',
      performance: '+5%',
      uses: ['PCB wysokiej częstotliwości', 'Złącza precyzyjne', 'Przewody bondingowe', 'Styki elektryczne']
    },
    {
      sector: 'Energetyka',
      icon: Battery,
      current: 'Miedź/Srebro',
      new: 'Cu-Mg-Carbon',
      savings: '65%',
      performance: '+10%',
      uses: ['Szyny zbiorcze', 'Kable przesyłowe', 'Złącza akumulatorów', 'Transformatory']
    },
    {
      sector: 'Automotive',
      icon: Car,
      current: 'Miedź',
      new: 'Cu-Mg-Carbon',
      savings: '45%',
      performance: '+12%',
      uses: ['Cewki zapłonowe', 'Przewody wysokonap.', 'Systemy ładowania', 'Silniki elektryczne']
    },
    {
      sector: 'Przemysł',
      icon: Factory,
      current: 'Miedź/Aluminium',
      new: 'Cu-Mg-Carbon',
      savings: '55%',
      performance: '+8%',
      uses: ['Uziemienia', 'Instalacje elektryczne', 'Aparatura pomiarowa', 'Automatyka']
    }
  ];

  // Parametry techniczne
  const technicalParams = [
    { param: 'Przewodność elektryczna', unit: 'MS/m', srebro: 63.0, cuMgCarbon: 65.5, diff: '+4.0%' },
    { param: 'Przewodność (IACS)', unit: '%', srebro: 105, cuMgCarbon: 110, diff: '+4.8%' },
    { param: 'Gęstość', unit: 'g/cm³', srebro: 10.49, cuMgCarbon: 8.15, diff: '-22.3%' },
    { param: 'Wytrzymałość', unit: 'MPa', srebro: 150, cuMgCarbon: 450, diff: '+200%' },
    { param: 'Twardość', unit: 'HV', srebro: 25, cuMgCarbon: 132, diff: '+428%' },
    { param: 'Temp. topnienia', unit: '°C', srebro: 962, cuMgCarbon: 1085, diff: '+12.8%' },
    { param: 'Stabilność termiczna', unit: '°C', srebro: 350, cuMgCarbon: 450, diff: '+28.6%' },
    { param: 'Współcz. rozszerzalności', unit: '10⁻⁶/K', srebro: 18.9, cuMgCarbon: 16.5, diff: '-12.7%' }
  ];

  // Wydajność vs temperatura
  const tempPerformance = [
    { temp: 25, srebro: 105, cuMgCarbon: 110 },
    { temp: 100, srebro: 103, cuMgCarbon: 109 },
    { temp: 200, srebro: 100, cuMgCarbon: 107 },
    { temp: 300, srebro: 95, cuMgCarbon: 104 },
    { temp: 400, srebro: 88, cuMgCarbon: 100 },
    { temp: 450, srebro: 82, cuMgCarbon: 96 }
  ];

  // ROI analiza
  const roiData = [
    { year: 0, srebro: -100, cuMgCarbon: -100 },
    { year: 1, srebro: -85, cuMgCarbon: -45 },
    { year: 2, srebro: -70, cuMgCarbon: 10 },
    { year: 3, srebro: -55, cuMgCarbon: 65 },
    { year: 4, srebro: -40, cuMgCarbon: 120 },
    { year: 5, srebro: -25, cuMgCarbon: 175 }
  ];

  const tabs = [
    { id: 'conductivity', label: 'Przewodność', icon: Zap },
    { id: 'properties', label: 'Właściwości', icon: Shield },
    { id: 'cost', label: 'Koszty', icon: DollarSign },
    { id: 'applications', label: 'Zastosowania', icon: Wrench },
    { id: 'technical', label: 'Parametry', icon: TrendingUp }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 mb-6 shadow-2xl">
          <h1 className="text-4xl font-bold text-white mb-2">
            Cu-Mg-Carbon Composite vs Srebro
          </h1>
          <p className="text-orange-100 text-lg">
            Kompleksowa analiza porównawcza nowego materiału przewodzącego
          </p>
        </div>

        {/* Kluczowe statystyki */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl p-6 shadow-lg">
            <Zap className="w-8 h-8 text-white mb-2" />
            <div className="text-3xl font-bold text-white">110%</div>
            <div className="text-green-100">IACS Przewodność</div>
            <div className="text-sm text-green-200 mt-1">+4.8% vs Srebro</div>
          </div>
          <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl p-6 shadow-lg">
            <DollarSign className="w-8 h-8 text-white mb-2" />
            <div className="text-3xl font-bold text-white">82%</div>
            <div className="text-blue-100">Oszczędności</div>
            <div className="text-sm text-blue-200 mt-1">vs Srebro w cenie</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl p-6 shadow-lg">
            <Shield className="w-8 h-8 text-white mb-2" />
            <div className="text-3xl font-bold text-white">450 MPa</div>
            <div className="text-purple-100">Wytrzymałość</div>
            <div className="text-sm text-purple-200 mt-1">+200% vs Srebro</div>
          </div>
          <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-xl p-6 shadow-lg">
            <TrendingUp className="w-8 h-8 text-white mb-2" />
            <div className="text-3xl font-bold text-white">450°C</div>
            <div className="text-orange-100">Stabilność</div>
            <div className="text-sm text-orange-200 mt-1">+28.6% vs Srebro</div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {tabs.map(tab => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-orange-500 text-white shadow-lg scale-105'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                <Icon className="w-5 h-5" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Content Sections */}
        {activeTab === 'conductivity' && (
          <div className="space-y-6">
            {/* Porównanie przewodności */}
            <div className="bg-slate-800 rounded-xl p-6 shadow-xl">
              <h2 className="text-2xl font-bold text-white mb-4">Przewodność Elektryczna</h2>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={conductivityData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="material" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" label={{ value: 'MS/m', angle: -90, position: 'insideLeft', fill: '#9CA3AF' }} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1F2937', border: 'none', borderRadius: '8px' }}
                    labelStyle={{ color: '#F9FAFB' }}
                  />
                  <Bar dataKey="value" fill="#FF6B35" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
              <div className="mt-4 p-4 bg-slate-700 rounded-lg">
                <p className="text-slate-300">
                  <strong className="text-orange-400">Cu-Mg-Carbon:</strong> 65.5 MS/m (110% IACS) | 
                  <strong className="text-slate-400 ml-2">Srebro:</strong> 63.0 MS/m (105% IACS) | 
                  <strong className="text-green-400 ml-2">Różnica:</strong> +4.0% przewaga
                </p>
              </div>
            </div>

            {/* Przewodność vs Temperatura */}
            <div className="bg-slate-800 rounded-xl p-6 shadow-xl">
              <h2 className="text-2xl font-bold text-white mb-4">Stabilność Przewodności przy Wysokich Temperaturach</h2>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={tempPerformance}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="temp" stroke="#9CA3AF" label={{ value: 'Temperatura (°C)', position: 'insideBottom', offset: -5, fill: '#9CA3AF' }} />
                  <YAxis stroke="#9CA3AF" label={{ value: '% IACS', angle: -90, position: 'insideLeft', fill: '#9CA3AF' }} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1F2937', border: 'none', borderRadius: '8px' }}
                    labelStyle={{ color: '#F9FAFB' }}
                  />
                  <Legend />
                  <Line type="monotone" dataKey="cuMgCarbon" stroke="#FF6B35" strokeWidth={3} name="Cu-Mg-Carbon" />
                  <Line type="monotone" dataKey="srebro" stroke="#C0C0C0" strokeWidth={3} name="Srebro" />
                </LineChart>
              </ResponsiveContainer>
              <div className="mt-4 p-4 bg-green-900/30 border border-green-500 rounded-lg">
                <p className="text-green-300">
                  ✓ Cu-Mg-Carbon utrzymuje przewodność 96% IACS przy 450°C (vs 82% dla srebra)
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'properties' && (
          <div className="space-y-6">
            {/* Radar Chart */}
            <div className="bg-slate-800 rounded-xl p-6 shadow-xl">
              <h2 className="text-2xl font-bold text-white mb-4">Profil Właściwości Materiałów</h2>
              <ResponsiveContainer width="100%" height={500}>
                <RadarChart data={propertiesComparison}>
                  <PolarGrid stroke="#374151" />
                  <PolarAngleAxis dataKey="property" stroke="#9CA3AF" />
                  <PolarRadiusAxis stroke="#9CA3AF" />
                  <Radar name="Cu-Mg-Carbon" dataKey="CuMgCarbon" stroke="#FF6B35" fill="#FF6B35" fillOpacity={0.6} />
                  <Radar name="Srebro" dataKey="Srebro" stroke="#C0C0C0" fill="#C0C0C0" fillOpacity={0.6} />
                  <Legend />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1F2937', border: 'none', borderRadius: '8px' }}
                    labelStyle={{ color: '#F9FAFB' }}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>

            {/* Szczegółowa tabela parametrów */}
            <div className="bg-slate-800 rounded-xl p-6 shadow-xl">
              <h2 className="text-2xl font-bold text-white mb-4">Szczegółowe Parametry Techniczne</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="py-3 px-4 text-slate-300">Parametr</th>
                      <th className="py-3 px-4 text-slate-300">Jednostka</th>
                      <th className="py-3 px-4 text-slate-300">Srebro</th>
                      <th className="py-3 px-4 text-orange-400">Cu-Mg-Carbon</th>
                      <th className="py-3 px-4 text-green-400">Różnica</th>
                    </tr>
                  </thead>
                  <tbody>
                    {technicalParams.map((param, idx) => (
                      <tr key={idx} className="border-b border-slate-700 hover:bg-slate-700/50">
                        <td className="py-3 px-4 text-white font-medium">{param.param}</td>
                        <td className="py-3 px-4 text-slate-400">{param.unit}</td>
                        <td className="py-3 px-4 text-slate-300">{param.srebro}</td>
                        <td className="py-3 px-4 text-orange-400 font-bold">{param.cuMgCarbon}</td>
                        <td className={`py-3 px-4 font-bold ${param.diff.includes('+') ? 'text-green-400' : 'text-blue-400'}`}>
                          {param.diff}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'cost' && (
          <div className="space-y-6">
            {/* Analiza kosztów */}
            <div className="bg-slate-800 rounded-xl p-6 shadow-xl">
              <h2 className="text-2xl font-bold text-white mb-4">Porównanie Kosztów ($/kg)</h2>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={costAnalysis}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="aspect" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1F2937', border: 'none', borderRadius: '8px' }}
                    labelStyle={{ color: '#F9FAFB' }}
                  />
                  <Legend />
                  <Bar dataKey="Srebro" fill="#C0C0C0" radius={[8, 8, 0, 0]} />
                  <Bar dataKey="CuMgCarbon" fill="#FF6B35" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* ROI Analysis */}
            <div className="bg-slate-800 rounded-xl p-6 shadow-xl">
              <h2 className="text-2xl font-bold text-white mb-4">Zwrot z Inwestycji (ROI)</h2>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={roiData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="year" stroke="#9CA3AF" label={{ value: 'Lata', position: 'insideBottom', offset: -5, fill: '#9CA3AF' }} />
                  <YAxis stroke="#9CA3AF" label={{ value: 'ROI (%)', angle: -90, position: 'insideLeft', fill: '#9CA3AF' }} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1F2937', border: 'none', borderRadius: '8px' }}
                    labelStyle={{ color: '#F9FAFB' }}
                  />
                  <Legend />
                  <Line type="monotone" dataKey="cuMgCarbon" stroke="#FF6B35" strokeWidth={3} name="Cu-Mg-Carbon" />
                  <Line type="monotone" dataKey="srebro" stroke="#C0C0C0" strokeWidth={3} name="Srebro" />
                </LineChart>
              </ResponsiveContainer>
              <div className="mt-4 p-4 bg-green-900/30 border border-green-500 rounded-lg">
                <p className="text-green-300">
                  ✓ Cu-Mg-Carbon osiąga próg rentowności po 2 latach (vs 5+ lat dla srebra)
                </p>
              </div>
            </div>

            {/* Breakdown kosztów */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-800 rounded-xl p-6 shadow-xl">
                <h3 className="text-xl font-bold text-slate-300 mb-4">Srebro - Struktura Kosztów</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-slate-700 rounded">
                    <span className="text-slate-300">Surowiec (Ag)</span>
                    <span className="text-white font-bold">480.00 $/kg</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-slate-700 rounded">
                    <span className="text-slate-300">Produkcja</span>
                    <span className="text-white font-bold">40.00 $/kg</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-slate-700 rounded">
                    <span className="text-slate-300">Całkowity koszt</span>
                    <span className="text-red-400 font-bold text-lg">520.00 $/kg</span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800 rounded-xl p-6 shadow-xl">
                <h3 className="text-xl font-bold text-orange-400 mb-4">Cu-Mg-Carbon - Struktura Kosztów</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-slate-700 rounded">
                    <span className="text-slate-300">Surowce (Cu+Mg+C)</span>
                    <span className="text-white font-bold">31.86 $/kg</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-slate-700 rounded">
                    <span className="text-slate-300">Produkcja</span>
                    <span className="text-white font-bold">55.00 $/kg</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-slate-700 rounded">
                    <span className="text-slate-300">Całkowity koszt</span>
                    <span className="text-green-400 font-bold text-lg">86.86 $/kg</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-green-900/30 border border-green-500 rounded">
                  <p className="text-green-300 font-bold text-center">Oszczędność: 433.14 $ na kg (83.3%)</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'applications' && (
          <div className="space-y-6">
            {applications.map((app, idx) => {
              const Icon = app.icon;
              return (
                <div key={idx} className="bg-slate-800 rounded-xl p-6 shadow-xl">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-orange-500 p-3 rounded-lg">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">{app.sector}</h3>
                      <div className="flex gap-4 mb-4">
                        <div className="bg-slate-700 px-4 py-2 rounded-lg">
                          <span className="text-slate-400 text-sm">Obecnie:</span>
                          <span className="text-white font-bold ml-2">{app.current}</span>
                        </div>
                        <div className="bg-orange-900/30 border border-orange-500 px-4 py-2 rounded-lg">
                          <span className="text-orange-300 text-sm">Nowy:</span>
                          <span className="text-orange-400 font-bold ml-2">{app.new}</span>
                        </div>
                      </div>
                      <div className="flex gap-4 mb-4">
                        <div className="bg-green-900/30 border border-green-500 px-4 py-2 rounded-lg">
                          <span className="text-green-300">💰 Oszczędności: </span>
                          <span className="text-green-400 font-bold">{app.savings}</span>
                        </div>
                        <div className="bg-blue-900/30 border border-blue-500 px-4 py-2 rounded-lg">
                          <span className="text-blue-300">⚡ Wydajność: </span>
                          <span className="text-blue-400 font-bold">{app.performance}</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {app.uses.map((use, i) => (
                          <div key={i} className="bg-slate-700 p-3 rounded-lg text-slate-300 text-sm">
                            • {use}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Market Potential */}
            <div className="bg-gradient-to-br from-purple-900 to-blue-900 rounded-xl p-6 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-4">Potencjał Rynkowy</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white/10 backdrop-blur p-4 rounded-lg">
                  <div className="text-3xl font-bold text-purple-300">$2.5B</div>
                  <div className="text-purple-200">Rynek elektroniki</div>
                </div>
                <div className="bg-white/10 backdrop-blur p-4 rounded-lg">
                  <div className="text-3xl font-bold text-blue-300">$4.8B</div>
                  <div className="text-blue-200">Rynek energetyki</div>
                </div>
                <div className="bg-white/10 backdrop-blur p-4 rounded-lg">
                  <div className="text-3xl font-bold text-cyan-300">$3.2B</div>
                  <div className="text-cyan-200">Rynek automotive</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'technical' && (
          <div className="space-y-6">
            {/* Mechanizmy przewodzenia */}
            <div className="bg-slate-800 rounded-xl p-6 shadow-xl">
              <h2 className="text-2xl font-bold text-white mb-4">Mechanizmy Ulepszenia Przewodności</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-orange-900/50 to-red-900/50 p-6 rounded-lg border border-orange-500">
                  <h4 className="text-lg font-bold text-orange-300 mb-3">🔬 Rola Magnezu (4%)</h4>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li>• Tworzy roztwór stały Cu(Mg)</li>
                    <li>• Redukuje tlenki powierzchniowe</li>
                    <li>• Zwiększa zwilżalność grafenu</li>
                    <li>• Stabilizuje strukturę krystaliczną</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-blue-900/50 to-cyan-900/50 p-6 rounded-lg border border-blue-500">
                  <h4 className="text-lg font-bold text-blue-300 mb-3">⚡ Rola Grafenu (4%)</h4>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li>• Mostki przewodzące między ziarnami</li>
                    <li>• Przewodzenie balistyczne</li>
                    <li>• Ograniczenie rozpraszania elektronów</li>
                    <li>• Redukcja migracji granic ziaren</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 p-6 rounded-lg border border-purple-500">
                  <h4 className="text-lg font-bold text-purple-300 mb-3">🏗️ Mikrostruktura</h4>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li>• Ziarna Cu: 15-25 μm</li>
                    <li>• Warstwy grafenu na granicach</li>
                    <li>• Brak faz międzymetalicznych</li>
                    <li>• Gęstość: 8.15 g/cm³</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Porównanie strukturalne */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-800 rounded-xl p-6 shadow-xl">
                <h3 className="text-xl font-bold text-slate-300 mb-4">Srebro - Charakterystyka</h3>
                <div className="space-y-3">
                  <div className="p-4 bg-slate-700 rounded-lg">
                    <h5 className="text-white font-semibold mb-2">⚛️ Struktura krystaliczna</h5>
                    <p className="text-slate-400 text-sm">FCC (Regularna ściennie centrowana)</p>
                  </div>
                  <div className="p-4 bg-slate-700 rounded-lg">
                    <h5 className="text-white font-semibold mb-2">🔋 Mechanizm przewodzenia</h5>
                    <p className="text-slate-400 text-sm">Przewodzenie elektronowe w sieci Ag, wysokie rozproszenie fonon-elektron przy wysokich temp.</p>
                  </div>
                  <div className="p-4 bg-slate-700 rounded-lg">
                    <h5 className="text-white font-semibold mb-2">⚠️ Ograniczenia</h5>
                    <p className="text-slate-400 text-sm">Niska wytrzymałość mechaniczna (150 MPa), utlenianie, wysokie koszty, spadek przewodności >350°C</p>
                  </div>
                  <div className="p-4 bg-slate-700 rounded-lg">
                    <h5 className="text-white font-semibold mb-2">✨ Zalety</h5>
                    <p className="text-slate-400 text-sm">Najwyższa przewodność wśród czystych metali, odporność korozyjna, łatwość obróbki</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800 rounded-xl p-6 shadow-xl">
                <h3 className="text-xl font-bold text-orange-400 mb-4">Cu-Mg-Carbon - Charakterystyka</h3>
                <div className="space-y-3">
                  <div className="p-4 bg-orange-900/20 border border-orange-500/50 rounded-lg">
                    <h5 className="text-orange-300 font-semibold mb-2">⚛️ Struktura kompozytowa</h5>
                    <p className="text-slate-300 text-sm">Matryca Cu(Mg) z rozproszonym grafenem na granicach ziaren</p>
                  </div>
                  <div className="p-4 bg-orange-900/20 border border-orange-500/50 rounded-lg">
                    <h5 className="text-orange-300 font-semibold mb-2">🔋 Mechanizm przewodzenia</h5>
                    <p className="text-slate-300 text-sm">Przewodzenie hybrydowe: Cu(Mg) + mostki grafenowe, minimalne rozproszenie na granicach ziaren</p>
                  </div>
                  <div className="p-4 bg-orange-900/20 border border-orange-500/50 rounded-lg">
                    <h5 className="text-orange-300 font-semibold mb-2">✨ Zalety</h5>
                    <p className="text-slate-300 text-sm">Najwyższa przewodność, wysoka wytrzymałość (450 MPa), stabilność do 450°C, 83% tańszy</p>
                  </div>
                  <div className="p-4 bg-orange-900/20 border border-orange-500/50 rounded-lg">
                    <h5 className="text-orange-300 font-semibold mb-2">⚠️ Wyzwania</h5>
                    <p className="text-slate-300 text-sm">Kontrola dyspersji grafenu, wymaga atmosfery ochronnej przy produkcji</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Cechy wspólne i różnice */}
            <div className="bg-slate-800 rounded-xl p-6 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-4">Cechy Wspólne i Różnice</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-green-400 mb-3">✓ Cechy Wspólne</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-slate-300">
                      <span className="text-green-400">•</span>
                      <span>Bardzo wysoka przewodność elektryczna (>60 MS/m)</span>
                    </li>
                    <li className="flex items-start gap-2 text-slate-300">
                      <span className="text-green-400">•</span>
                      <span>Przewodność cieplna powyżej 350 W/(m·K)</span>
                    </li>
                    <li className="flex items-start gap-2 text-slate-300">
                      <span className="text-green-400">•</span>
                      <span>Dobra ciągliwość i obrabialność</span>
                    </li>
                    <li className="flex items-start gap-2 text-slate-300">
                      <span className="text-green-400">•</span>
                      <span>Możliwość lutowania i spawania</span>
                    </li>
                    <li className="flex items-start gap-2 text-slate-300">
                      <span className="text-green-400">•</span>
                      <span>Struktura krystaliczna FCC (bazowa)</span>
                    </li>
                    <li className="flex items-start gap-2 text-slate-300">
                      <span className="text-green-400">•</span>
                      <span>Zastosowania w elektronice i energetyce</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-red-400 mb-3">⚡ Kluczowe Różnice</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-slate-300">
                      <span className="text-red-400">•</span>
                      <span><strong>Przewodność:</strong> Cu-Mg-C +4.8% wyższa</span>
                    </li>
                    <li className="flex items-start gap-2 text-slate-300">
                      <span className="text-red-400">•</span>
                      <span><strong>Wytrzymałość:</strong> Cu-Mg-C 3× silniejszy</span>
                    </li>
                    <li className="flex items-start gap-2 text-slate-300">
                      <span className="text-red-400">•</span>
                      <span><strong>Gęstość:</strong> Cu-Mg-C 22% lżejszy</span>
                    </li>
                    <li className="flex items-start gap-2 text-slate-300">
                      <span className="text-red-400">•</span>
                      <span><strong>Stabilność:</strong> Cu-Mg-C do 450°C vs Ag 350°C</span>
                    </li>
                    <li className="flex items-start gap-2 text-slate-300">
                      <span className="text-red-400">•</span>
                      <span><strong>Koszt:</strong> Cu-Mg-C 83% tańszy</span>
                    </li>
                    <li className="flex items-start gap-2 text-slate-300">
                      <span className="text-red-400">•</span>
                      <span><strong>Struktura:</strong> Ag czysty metal, Cu-Mg-C kompozyt</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Performance metrics */}
            <div className="bg-slate-800 rounded-xl p-6 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-4">Wskaźniki Wydajności - Szczegółowo</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-gradient-to-br from-blue-900/50 to-blue-800/50 rounded-lg border border-blue-500">
                  <h5 className="text-blue-300 font-bold mb-3">Elektryczne</h5>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-300">Rezystywność:</span>
                      <span className="text-white font-semibold">1.53 μΩ·cm</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">vs Srebro:</span>
                      <span className="text-white font-semibold">1.59 μΩ·cm</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Współcz. temp.:</span>
                      <span className="text-white font-semibold">0.0038/°C</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Straty @1kA:</span>
                      <span className="text-green-400 font-semibold">-4% vs Ag</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-gradient-to-br from-orange-900/50 to-orange-800/50 rounded-lg border border-orange-500">
                  <h5 className="text-orange-300 font-bold mb-3">Mechaniczne</h5>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-300">Moduł Younga:</span>
                      <span className="text-white font-semibold">135 GPa</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">vs Srebro:</span>
                      <span className="text-white font-semibold">83 GPa</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Wydłużenie:</span>
                      <span className="text-white font-semibold">12%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Odporność:</span>
                      <span className="text-green-400 font-semibold">+180% vs Ag</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-gradient-to-br from-purple-900/50 to-purple-800/50 rounded-lg border border-purple-500">
                  <h5 className="text-purple-300 font-bold mb-3">Termiczne</h5>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-300">Przewodn. ciepl.:</span>
                      <span className="text-white font-semibold">385 W/(m·K)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">vs Srebro:</span>
                      <span className="text-white font-semibold">429 W/(m·K)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Stabilność:</span>
                      <span className="text-white font-semibold">450°C</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Rozszerzalność:</span>
                      <span className="text-green-400 font-semibold">-12.7% vs Ag</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Przewaga konkurencyjna - rozszerzona */}
            <div className="bg-gradient-to-br from-green-900 to-emerald-900 rounded-xl p-6 shadow-xl border border-green-500">
              <h3 className="text-2xl font-bold text-white mb-4">🏆 Kompleksowa Przewaga Konkurencyjna</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-green-300 mb-3">vs Srebro</h4>
                  <ul className="space-y-2 text-white">
                    <li>✅ <strong>+4.8%</strong> przewodności elektrycznej</li>
                    <li>✅ <strong>+200%</strong> wytrzymałości mechanicznej</li>
                    <li>✅ <strong>+28.6%</strong> stabilności termicznej</li>
                    <li>✅ <strong>-22.3%</strong> gęstości (lżejszy)</li>
                    <li>✅ <strong>-83.3%</strong> kosztów (433$/kg oszczędności)</li>
                    <li>✅ <strong>+428%</strong> twardości</li>
                    <li>⚖️ Nieznacznie niższa odporność korozyjna</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-green-300 mb-3">vs Miedź czystą</h4>
                  <ul className="space-y-2 text-white">
                    <li>✅ <strong>+10%</strong> przewodności elektrycznej</li>
                    <li>✅ <strong>+80%</strong> wytrzymałości mechanicznej</li>
                    <li>✅ <strong>-8.4%</strong> gęstości</li>
                    <li>✅ <strong>+50%</strong> stabilności termicznej</li>
                    <li>✅ Lepsze właściwości na granicach ziaren</li>
                    <li>✅ Zwiększona odporność na pełzanie</li>
                    <li>⚖️ Koszt: +170% ale ROI w 2 lata</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white/10 backdrop-blur rounded-lg">
                <p className="text-green-100 text-center text-lg">
                  <strong>Wartość użytkowa:</strong> Cu-Mg-Carbon oferuje <strong className="text-green-300">+300%</strong> wartości 
                  w stosunku do srebra przy <strong className="text-green-300">-83%</strong> kosztu
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Footer - Podsumowanie */}
        <div className="mt-8 bg-gradient-to-r from-orange-500 via-red-500 to-purple-600 rounded-xl p-6 shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-4">📊 Podsumowanie Kluczowych Wniosków</h3>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white/20 backdrop-blur rounded-lg p-4">
              <div className="text-3xl font-bold text-white mb-1">110%</div>
              <div className="text-sm text-white/90">Przewodność IACS</div>
              <div className="text-xs text-white/70 mt-1">Najwyższa ze wszystkich</div>
            </div>
            <div className="bg-white/20 backdrop-blur rounded-lg p-4">
              <div className="text-3xl font-bold text-white mb-1">83%</div>
              <div className="text-sm text-white/90">Redukcja kosztów</div>
              <div className="text-xs text-white/70 mt-1">vs Srebro</div>
            </div>
            <div className="bg-white/20 backdrop-blur rounded-lg p-4">
              <div className="text-3xl font-bold text-white mb-1">450 MPa</div>
              <div className="text-sm text-white/90">Wytrzymałość</div>
              <div className="text-xs text-white/70 mt-1">3× silniejszy niż Ag</div>
            </div>
            <div className="bg-white/20 backdrop-blur rounded-lg p-4">
              <div className="text-3xl font-bold text-white mb-1">450°C</div>
              <div className="text-sm text-white/90">Stabilność</div>
              <div className="text-xs text-white/70 mt-1">+100°C vs Srebro</div>
            </div>
          </div>
          <div className="mt-4 p-4 bg-white/10 backdrop-blur rounded-lg">
            <p className="text-white text-center">
              <strong>Cu-Mg-Carbon Composite</strong> to przełomowy materiał przewodzący, który przewyższa srebro 
              w przewodności elektrycznej przy dramatycznie niższych kosztach i lepszych właściwościach mechanicznych.
              Idealny do zastosowań w elektronice, energetyce, automotive i przemyśle.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaterialComparison;
