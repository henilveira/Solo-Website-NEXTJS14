
import FormularioContato from './formulario-contato'

export default function PaginaContato() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="p-8 max-w-md">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold text-white">Contato</h2>
          <p className="text-gray-200">Descreva seu problema no formulário abaixo. Estamos prontos para encontrar a melhor solução em automação para você.</p>
          <FormularioContato />
        </div>
      </div>
    </div>
  )
}