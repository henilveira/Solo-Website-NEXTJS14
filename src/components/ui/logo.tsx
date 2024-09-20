'use client';

import useTheme from './useTheme'; // Importando o hook do tema
import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
  const { theme } = useTheme();

  return (
    <div>
        <Link href='/'>
            <Image
                src={theme === 'light' ? '/solo-logo-black.svg' : '/solo-logo-white.svg'}
                alt="Logo"
                width={100}
                height={50}
                />
        </Link>
    </div>
  );
};

export default Logo;


// 'use client';

// import useTheme from './useTheme';
// import Link from 'next/link';
// import Image from 'next/image';
// import { useEffect, useState } from 'react';

// const Logo = () => {
//   const { theme } = useTheme();
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) {
//     // Evita o "flash" de conteúdo incorreto durante a renderização no lado do servidor
//     return null;
//   }

//   return (
//     <div>
//       <Link href='/'>
//         <Image
//           src={theme === 'light' ? '/solo-logo-black.svg' : '/solo-logo-white.svg'}
//           alt="Logo"
//           width={125}
//           height={50}
//         />
//       </Link>
//     </div>
//   );
// };

// export default Logo;
