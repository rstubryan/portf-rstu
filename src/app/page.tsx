import Link from "next/link";

export default function Home() {
  return (
      <div>
        <h1 className={'font-bold'}>Portfolio, Click the link to see the project</h1>
        <ul className={"list-disc list-inside"}>
          <Link href={"https://rstubryan.github.io/dpop/"}>
            <li className="hover:underline">Dzikir Pop (2023)</li>
          </Link>
          <Link href={"https://www.indonesiasatuhati.id/"}>
            <li className="hover:underline">Pengembangan Fitur Psikotes Homeschooling Permata Hati dengan CodeIgniter dan Bootstrap (2023)</li>
          </Link>
          <Link href={"https://hmti.nusaputra.ac.id/"}>
            <li className="hover:underline">Pengembangan Laman Website Himpunan Mahasiswa Teknik Informatika dengan Laravel dan Tailwind CSS (2023)</li>
          </Link>
          <li>Sistem Kunjungan Wali Santri Santri Pondok Pesantren As-Salam Sukabumi (2023) (Private)</li>
          <Link href={"https://rstubryan.github.io/kkn/"}>
            <li className="hover:underline">Landing Pages Website KKN Desa Wangunsari (2023)</li>
          </Link>
          <Link href={"https://rstubryan.github.io/pariwisata/"}>
            <li className="hover:underline">Landing Pages Curug Cierang (2023)</li>
          </Link>
          <Link href={"https://github.com/rstubryan/laravel-lawaklu"}>
            <li className="hover:underline">Lawaklu : Meme Website (2023) (Repository)</li>
          </Link>
          <Link href={"https://github.com/rstubryan/KELOMPOK5-FE6"}>
            <li className="hover:underline">Landing Pages UMKM KW Vape Store (2024) (MSIB Batch 6 : Gamelab ID)</li>
          </Link>
          <Link href={"https://rstubryan.github.io/castro/"}>
            <li className="hover:underline">Castro : Podcast Horror Website (2024)</li>
          </Link>
          <Link href={"https://github.com/GamelabAhmad/Project20-4-ForumDiskusiApp-Frontend"}>
            <li className="hover:underline">Twenties : Forum Discussion App (2024) (MSIB Batch 6 : Gamelab ID)</li>
          </Link>
          <li>Sanskara Karya Conference (2024) (Internship)</li>
          <Link href={"https://github.com/rstubryan/dts-todo-app-expo"}>
            <li className="hover:underline">Todo App with React Native Expo (2024) (Repository)</li>
          </Link>
          <Link href={"https://github.com/rstubryan/dts-weather-app-expo"}>
            <li className="hover:underline">Weather App with React Native Expo (2024) (Repository)</li>
          </Link>
          <Link href={"https://github.com/rstubryan/dts-movie-app-progate-expo"}>
            <li className="hover:underline">TMDB Movie App with React Native Expo (2024) (Repository)</li>
          </Link>
          <Link href={"https://github.com/rstubryan/pomodoro-fe"}>
            <li className="hover:underline">Pomodoro App (2024) (Repository)</li>
          </Link>
        </ul>
        <h1 className={'font-bold'}>Ongoing Project and Production Ready</h1>
        <Link href={"https://dev.v2.telkom.ideaboxapp.com"}>
          <li className="hover:underline">Ideabox : Idea Management System (2024) (MSIB Batch 7 : Digital Amoeba)</li>
        </Link>
        <Link href={"https://sineasmov.com"}>
          <li className="hover:underline">SineasMov : OTT Platform (2024 - present) (Part Time Mentor)</li>
        </Link>
        <Link href={"http://sineasmov.com:81/dashboard"}>
          <li className="hover:underline">Backoffice SineasMov (2024 - present) (Part Time Mentor)</li>
        </Link>
        <Link href={"http://82.112.226.151:8084/dashboard"}>
          <li className="hover:underline">HRIS SineasMov (2024 - present) (Part Time Mentor)</li>
        </Link>
        <Link href={"https://hris-payroll.zeabur.app/dashboard"}>
          <li className="hover:underline">HR Payroll : Payroll System (Apr 2025 - present) (Part Time Mentor)</li>
        </Link>
        <Link href={"https://flexo.zeabur.app"}>
          <li className="hover:underline">Flexo : Sweeping Order System (Apr 2025 - present) (Freelance)</li>
        </Link>
        <Link href={"https://counseling-npu.zeabur.app"}>
          <li className="hover:underline">E-Counseling NPU : Counseling System and Live Chat (Apr 2025 - present) (Freelance)</li>
        </Link>
        <Link href={"https://dapur-abc.zeabur.app"}>
          <li className="hover:underline">Dapur ABC : E-Commerce System (Apr 2025 - present) (Freelance)</li>
        </Link>
        <Link href={"https://tascrum.site/login"}>
            <li className="hover:underline">Tascrum : Scrum Task Management System (May 2025 - present) (Thesis)</li>
        </Link>
      </div>
  );
}