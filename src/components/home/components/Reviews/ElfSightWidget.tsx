//TODO: limite de views, verificar site com números mais elevados de visualização de graça ou pegar dados do google
// "use client";
// import { useState } from "react";
// import Script from "next/script";

// const ElfSightWidget = ({ className }: { className?: string }) => {
//   const [loading, setLoading] = useState(true);

//   return (
//     <>
//       {loading && <p className="animate-pulse">Carregando Avaliações...</p>}
//       <Script
//         src="https://static.elfsight.com/platform/platform.js"
//         async
//         onLoad={() => setLoading(false)}
//       />
//       <div
//         className={`elfsight-app-e5a0fcd2-90e3-4de8-88a4-4f3e24eb900b font-poppins ${className}`}
//         data-elfsight-app-lazy
//       />
//     </>
//   );
// };

// export default ElfSightWidget;
