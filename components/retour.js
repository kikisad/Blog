
import Link from 'next/link'




export default function Retour() {
    return (

        <div class="">
        <Link href="/" scroll={false}>
            <button class="flex-none flex items-center mx-auto justify-center h-24 w-24 rounded-full bg-purple-50 text-purple-700" type="button" aria-label="like">
            <a><svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 12H3M3 12L10 5M3 12L10 19" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg></a>
            </button>
        </Link>
        </div>
        

    )
  }
  
