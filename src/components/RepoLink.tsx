import { clsx } from 'clsx/lite';
import Link from 'next/link';
import { BiLogoGithub } from 'react-icons/bi';

export default function RepoLink() {
  return (
    <span className="inline-flex items-center gap-2 whitespace-nowrap">
      <span className="hidden sm:inline-block">
        <p xmlns:cc="http://creativecommons.org/ns#" >
          <a rel="cc:attributionURL" href="https://gallery.aspi-rin.top/">
            These Photos
          </a> by <span property="cc:attributionName">Aspi Rin</span> is licensed under <a href="http://creativecommons.org/licenses/by-nc-nd/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">CC BY-NC-ND 4.0<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/nd.svg?ref=chooser-v1"></a></p>
          Made with
        </span>
          <Link
            href="http://github.com/sambecker/exif-photo-blog"
            target="_blank"
            className={clsx(
              'flex items-center gap-0.5',
              'text-main hover:text-main',
              'hover:underline',
            )}
          >
            <BiLogoGithub
              size={16}
              className="translate-y-[0.5px] hidden xs:inline-block"
            />
            exif-photo-blog
          </Link>
        </span>
          );
}
