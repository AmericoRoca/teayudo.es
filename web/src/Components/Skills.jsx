import React from 'react'

export const Skills = () => {
  return (
    <section className="my-20 py-20 bg-[#FEF6F1] font-poppins">
      <div className="max-w-6xl mx-auto px-4">
        {/* Encabezado en Grid */}
        <div className="grid grid-cols-3 gap-x-2 gap-y-3 mb-10">
          {/* Título (col-span-2) */}
          <div className="col-span-2 flex flex-col items-end text-right pr-4">
            <h2 className="text-[#C4796C] text-base font-bold tracking-widest mb-1">
              SERVICIOS
            </h2>
            <p className="text-[#86786F] text-xl font-light leading-tight">
              QUE OFRECEMOS<br />EN EL CENTRO
            </p>
          </div>

          {/* Semicírculo esquina superior derecha */}
          <div className="w-28 h-28 bg-[#E7D7C4] rounded-tr-full rounded-br-full flex items-center justify-center p-3 text-center">
            <h2 className="text-xs font-medium text-[#86786F]">
              PSICOLOGÍA<br />INFANTOJUVENIL <br />›
            </h2>
          </div>
        </div>

        {/* Grid de 3x3 bloques */}
        <div className="grid grid-cols-3 gap-x-6 gap-y-10">
          {/* Círculo */}
          <div className="w-28 h-28 bg-[#E7D7C4] rounded-full flex items-center justify-center p-3 text-center">
            <h2 className="text-xs font-medium text-[#86786F] leading-tight">
              REEDUCACIÓN<br />PSICOPEDAGÓGICA <br />›
            </h2>
          </div>

          {/* Triángulo */}
          <div className="relative w-28 h-28 flex items-center justify-center">
            <div className="w-0 h-0 border-l-[60px] border-r-[60px] border-t-[100px] border-l-transparent border-r-transparent border-t-[#E7D7C4]"></div>
            <h2 className="absolute top-16 text-xs font-medium text-[#86786F] text-center leading-tight">
              TERAPIA<br />FAMILIAR <br />›
            </h2>
          </div>

          {/* Cuadro rojo */}
          <div className="w-28 h-28 bg-[#E7D7C4] flex flex-col items-center justify-center text-center p-4 text-white">
            <h2 className="text-xs font-semibold mb-2 leading-tight">
              PSICOLOGÍA PERINATAL
              <br />›
            </h2>
          </div>

          {/* Cuadro normal */}
          <div className="w-28 h-28 bg-[#E7D7C4] flex items-center justify-center p-3 text-center">
            <h2 className="text-xs font-medium text-[#86786F] leading-tight">
              ASESORAMIENTO<br />EN LA CRIANZA <br />›
            </h2>
          </div>

          {/* Semicírculo arriba (logopedia) */}
          <div className="w-28 h-28 bg-[#E7D7C4] rounded-full rounded-b-none flex items-center justify-center p-3 text-center">
            <h2 className="text-xs font-medium text-[#86786F] leading-tight">
              LOGOPEDIA <br />›
            </h2>
          </div>

          {/* Círculo */}
          <div className="w-28 h-28 bg-[#E7D7C4] rounded-full flex items-center justify-center p-3 text-center">
            <h2 className="text-xs font-medium text-[#86786F] leading-tight">
              YOGA &<br />MINDFULNESS <br />›
            </h2>
          </div>
        </div>
      </div>
    </section>
  )
}
