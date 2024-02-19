import { clsx } from 'clsx/lite';
import Link from 'next/link';
import { BiLogoGithub } from 'react-icons/bi';

// export default function RepoLink() {
//   return (
//     <span className="inline-flex items-center gap-2 whitespace-nowrap">
//       <span className="hidden sm:inline-block">
//           Made with
//         </span>
//           <Link
//             href="http://github.com/sambecker/exif-photo-blog"
//             target="_blank"
//             className={clsx(
//               'flex items-center gap-0.5',
//               'text-main hover:text-main',
//               'hover:underline',
//             )}
//           >
//             <BiLogoGithub
//               size={16}
//               className="translate-y-[0.5px] hidden xs:inline-block"
//             />
//             exif-photo-blog
//           </Link>
//         </span>
//           );
// }
export default function RepoLink() {
  return (
    <span className="inline-flex items-center gap-2 whitespace-nowrap">
      <span className="hidden sm:inline-block">
        Made with
      </span>
      <Link
        href="http://github.com/sambecker/exif-photo-blog"
        target="_blank"
        className={clsx(
          'flex items-center gap-0.5',
          'text-main hover:text-main',
          'hover:underline'
        )}
      >
        <BiLogoGithub size={16} className="translate-y-[0.5px] hidden xs:inline-block" />
        exif-photo-blog
      </Link>
      <p
        xmlns:cc="http://creativecommons.org/ns#"
        className="mt-2 text-sm hidden sm:block"
      >
        <a rel="cc:attributionURL" href="https://github.com/aspi-rin">
          These Photos
        </a> by <span property="cc:attributionName">Aspi Rin</span> is licensed under
        <a
          href="http://creativecommons.org/licenses/by-nc-nd/4.0/?ref=chooser-v1"
          target="_blank"
          rel="license noopener noreferrer"
          style={{ display: 'inline-block' }}
        >
          CC BY-NC-ND 4.0
          <img
            style={{ height: 22, marginRight: 3, marginBottom: -2 }}
            src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"
            alt="Creative Commons"
          />
          <img
            style={{ height: 22, marginRight: 3, marginBottom: -2 }}
            src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"
            alt="Attribution"
          />
          <img
            style={{ height: 22, marginRight: 3, marginBottom: -2 }}
            src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1"
            alt="NonCommercial"
          />
          <img
            style={{ height: 22, marginBottom: -2 }}
            src="https://mirrors.creativecommons.org/presskit/icons/nd.svg?ref=chooser-v1"
            alt="NoDerivs"
          />
        </a>
      </p>
    </span>
  );
}
