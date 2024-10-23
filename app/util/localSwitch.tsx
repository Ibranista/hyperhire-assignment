'use client';

import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { MouseEvent } from 'react';

const LocaleSwitch = () => {
    const router = useRouter();
    const pathname = usePathname();
    const currentLocale = pathname?.split('/')[1] || 'en-US';

    const handleLocaleChange = (e: MouseEvent<HTMLButtonElement>, selectedLocale: string) => {
        e.preventDefault();
        const newPathname = `/${selectedLocale}${pathname?.slice(currentLocale.length + 1)}`;
        router.push(newPathname, { scroll: false });
    };

    return (
        <section className='absolute top-[90px] flex flex-col gap-y-3 z-10'>
            <button
                onClick={(e) => handleLocaleChange(e, 'ko-KR')}
                className='text-white'
            >
                Korean
            </button>
            <button
                onClick={(e) => handleLocaleChange(e, 'en-US')}
                className='text-white'
            >
                English
            </button>
        </section>
    );
};

export default LocaleSwitch;
