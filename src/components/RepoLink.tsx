import { clsx } from 'clsx/lite';
import Link from 'next/link';
import { BiLogoGithub } from 'react-icons/bi';

export default function RepoLink() {
  return (
    <span className="inline-flex items-center gap-2 whitespace-nowrap">
      <span className="hidden sm:inline-block">
          This work by Aspi Rin is licensed under CC BY-NC-ND 4.0
        </span>
          <Link
            href="http://creativecommons.org/licenses/by-nc-nd/4.0/"
            target="_blank"
            className={clsx(
              'flex items-center gap-0.5',
              'text-main hover:text-main',
              'hover:underline',
            )}
          >
            CC BY-NC-ND 4.0
          </Link>
        </span>
          );
}