
import FormularioContato from './formulario-contato'

export default function PaginaContato() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="p-8 max-w-md">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold dark:text-white text-neutral-800">Contato</h2>
          <p className="dark:text-gray-200 tet-gray-400">Descreva seu problema no formulário abaixo. Estamos prontos para encontrar a melhor solução em automação para você.</p>
          <FormularioContato />
        </div>
      </div>
    </div>
  )
}