import { PieChart, Pie, Cell, ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

const dataResumo = [
  { name: "Cartão de crédito", value: 4021.94 },
  { name: "Transporte", value: 2776 },
  { name: "Doações", value: 755 },
  { name: "Lazer e Entretenimento", value: 755 },
  { name: "Casa", value: 715.82 },
];

const cores = ["#000000", "#00C49F", "#FFBB28", "#FF8042", "#FF4D4D"];

const dadosLinha = [
  { dia: "07/jun", saldo: 0 },
  { dia: "08/jun", saldo: -4000 },
  { dia: "09/jun", saldo: -5000 },
  { dia: "10/jun", saldo: -7000 },
  { dia: "11/jun", saldo: -8500 },
  { dia: "12/jun", saldo: -9934.46 },
];

export default function PainelVirelo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-gray-50 min-h-screen">
      
      <div className="bg-white rounded-2xl shadow p-6 col-span-2">
        <h2 className="text-xl font-semibold mb-2">Resultado do Período</h2>
        <p className="text-3xl font-bold text-red-600">R$ -9.934,46</p>
      </div>

      <div className="bg-white rounded-2xl shadow p-6">
        <h3 className="font-medium mb-4">Evolução do Saldo</h3>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={dadosLinha}>
            <XAxis dataKey="dia" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="saldo" stroke="#8884d8" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white rounded-2xl shadow p-6">
        <h3 className="font-medium mb-4">Despesas por Categoria</h3>
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={dataResumo}
              dataKey="value"
              nameKey="name"
              outerRadius={80}
              label
            >
              {dataResumo.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={cores[index % cores.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white rounded-2xl shadow p-6 col-span-2">
        <h3 className="font-medium mb-4">Transações Recentes</h3>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left border-b">
              <th className="py-2">Descrição</th>
              <th className="py-2">Valor</th>
              <th className="py-2">Categoria</th>
              <th className="py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Aluguel</td>
              <td className="text-red-600">R$ 5.200,00</td>
              <td>Casa</td>
              <td className="text-yellow-600">A Pagar</td>
            </tr>
            <tr>
              <td>Aluguel de carro</td>
              <td className="text-red-600">R$ 2.626,00</td>
              <td>Transporte</td>
              <td className="text-green-600">Pago</td>
            </tr>
            <tr>
              <td>Assinatura do Spotify</td>
              <td className="text-red-600">R$ 28,00</td>
              <td>Assinaturas</td>
              <td className="text-yellow-600">A Pagar</td>
            </tr>
            <tr>
              <td>Presente Namorados</td>
              <td className="text-red-600">R$ 755,00</td>
              <td>Lazer</td>
              <td className="text-green-600">Pago</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="col-span-2 flex justify-end">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">Exportar PDF</button>
      </div>
    </div>
  );
}
