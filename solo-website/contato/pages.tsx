
import FormularioContato from './formulario-contato'

export default function PaginaContato() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="p-8 max-w-md">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold text-white">Fale conosco</h2>
          <p className="text-gray-200">Nossa equipe te dará todo suporte necessário!</p>
          <FormularioContato />
        </div>
      </div>
    </div>
  )
}