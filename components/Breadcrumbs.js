import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const convertBreadcrumb = string => {
  return string
    .replace(/-/g, ' ')
    .replace(/oe/g, 'ö')
    .replace(/ae/g, 'ä')
    .replace(/ue/g, 'ü')
    .toUpperCase();
};

export  const Breadcrumbs = () => {
  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState(null);

  useEffect(() => {
    if (router) {
      const linkPath = router.asPath.split('/');
      linkPath.shift();

      const pathArray = linkPath.map((path, i) => {
        return { breadcrumb: path, href: '/' + linkPath.slice(0, i + 1).join('/') };
      });

      setBreadcrumbs(pathArray);
    }
  }, [router]);

  if (!breadcrumbs) {
    return null;
  }

  return (
    <nav aria-label="breadcrumbs">
      <div class="flex">
        <div class="flex-initial">
          <Link href="/">
              <a className="pr-3 text-gray-900 dark:text-gray-100">
                Acceuil 
              </a>
          </Link>
        </div>
        <div class="flex-initial ...">
          {breadcrumbs.map((breadcrumb, i) => {
            return (
            <div key={breadcrumb.href}>
                <div class="lowercase">
                  <Link href={breadcrumb.href}>
                    <a>
                      / {convertBreadcrumb(breadcrumb.breadcrumb)}
                    </a>
                  </Link>
                </div>
            </div>
            );
          })}
        </div>
      </div>
    </nav>
  );
};