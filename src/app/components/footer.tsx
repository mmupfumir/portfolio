
import Link from 'next/link';
export default function Footer() {

  return (
    <div className='container flex flex-row gap-3 flex-wrap text-xs text-black/50 py-10 justify-center'>
      <Link href='/' className='hover:text-black/20 transition duration-500'>Home</Link>
      <Link href='/Cv' className='hover:text-black/20 transition duration-500'>About</Link>
      <Link href='https://www.linkedin.com/in/milton-mupfumira' target='_blank' rel='noopener noreferrer/' className='hover:text-black/20 transition duration-500'>LinkedIn</Link>
      <Link href='mailto:mmupfumir@hartford.edu' className='hover:text-black/20 transition duration-500'>Email</Link>
    </div>
  );
}
