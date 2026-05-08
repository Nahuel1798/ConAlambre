export function ClienteDashboardPage() {
    return (
        <><header className="sticky top-0 z-50 bg-surface shadow-sm flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-sm">
        <div className="flex items-center gap-sm">
        <div className="w-10 h-10 rounded-full overflow-hidden bg-primary-container flex items-center justify-center">
        <img alt="User Profile" className="w-full h-full object-cover" data-alt="A professional headshot of a friendly man in his early 30s with a neat beard, set against a soft-focus office background. The lighting is bright and airy, reflecting a clean and modern professional aesthetic that aligns with the ConnectLink brand colors. The mood is approachable and trustworthy." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtyqYlJT_TflsN6XOrUccuzpG4nqLIbRptEDW4kiGv1dNPMJXmvHHH3HeXM5iAzdM3908zU7Rac40G27FcLD13VS2vv-Qer5Ee_GIsQJaXRNO469A_L_GUvre3v3yCGylvjA2Kkoc0jMKk5s-akZSPD5w4tAC7fW7nt8d9ErfnhMbCmWO8lcNSGB7GQpGq9HbasU1hFjasr2sNZew24CuJc98G0wEFOKMS2I8zxpGMRTWqfCVcqIl7SH3vuF7azLQfsYdj6yFYyjlp"/>
        </div>
        <span className="font-headline-md text-headline-md font-bold text-primary">ConnectLink</span>
        </div>
        <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container-high transition-colors active:scale-95 duration-150">
        <span className="material-symbols-outlined text-primary" data-icon="notifications">notifications</span>
        </button>
        </header>
        <main className="max-w-7xl mx-auto">
        <section className="px-margin-mobile md:px-margin-desktop mt-lg">
        <div className="relative group">
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
        <span className="material-symbols-outlined text-outline" data-icon="search">search</span>
        </div>
        <input className="w-full bg-surface-container-lowest border border-outline-variant rounded-xl py-4 pl-12 pr-4 font-body-md focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-sm" placeholder="What service do you need today?" type="text"/>
        </div>
        </section>
        <section className="mt-lg">
        <div className="flex items-center justify-between px-margin-mobile md:px-margin-desktop mb-sm">
        <h2 className="font-headline-md text-headline-md text-on-background">Categories</h2>
        <button className="text-primary font-label-lg hover:underline transition-all">View all</button>
        </div>
        <div className="flex overflow-x-auto gap-gutter px-margin-mobile md:px-margin-desktop hide-scrollbar py-2">
        <div className="flex flex-col items-center gap-xs flex-shrink-0 cursor-pointer active:scale-95 transition-transform">
        <div className="w-16 h-16 rounded-2xl bg-primary-container flex items-center justify-center text-on-primary-container shadow-md">
        <span className="material-symbols-outlined text-[32px]" data-icon="cleaning_services">cleaning_services</span>
        </div>
        <span className="font-label-lg text-on-surface">Cleaning</span>
        </div>
        <div className="flex flex-col items-center gap-xs flex-shrink-0 cursor-pointer active:scale-95 transition-transform">
        <div className="w-16 h-16 rounded-2xl bg-secondary-container flex items-center justify-center text-on-secondary-container shadow-md">
        <span className="material-symbols-outlined text-[32px]" data-icon="handyman">handyman</span>
        </div>
        <span className="font-label-lg text-on-surface">Repairs</span>
        </div>
        <div className="flex flex-col items-center gap-xs flex-shrink-0 cursor-pointer active:scale-95 transition-transform">
        <div className="w-16 h-16 rounded-2xl bg-surface-container-high flex items-center justify-center text-primary shadow-md">
        <span className="material-symbols-outlined text-[32px]" data-icon="architecture">architecture</span>
        </div>
        <span className="font-label-lg text-on-surface">Design</span>
        </div>
        <div className="flex flex-col items-center gap-xs flex-shrink-0 cursor-pointer active:scale-95 transition-transform">
        <div className="w-16 h-16 rounded-2xl bg-surface-container-high flex items-center justify-center text-primary shadow-md">
        <span className="material-symbols-outlined text-[32px]" data-icon="electric_bolt">electric_bolt</span>
        </div>
        <span className="font-label-lg text-on-surface">Electric</span>
        </div>
        <div className="flex flex-col items-center gap-xs flex-shrink-0 cursor-pointer active:scale-95 transition-transform">
        <div className="w-16 h-16 rounded-2xl bg-surface-container-high flex items-center justify-center text-primary shadow-md">
        <span className="material-symbols-outlined text-[32px]" data-icon="plumbing">plumbing</span>
        </div>
        <span className="font-label-lg text-on-surface">Plumbing</span>
        </div>
        <div className="flex flex-col items-center gap-xs flex-shrink-0 cursor-pointer active:scale-95 transition-transform">
        <div className="w-16 h-16 rounded-2xl bg-surface-container-high flex items-center justify-center text-primary shadow-md">
        <span className="material-symbols-outlined text-[32px]" data-icon="yard">yard</span>
        </div>
        <span className="font-label-lg text-on-surface">Gardening</span>
        </div>
        </div>
        </section>
        <section className="mt-xl px-margin-mobile md:px-margin-desktop">
        <div className="flex items-center justify-between mb-md">
        <h2 className="font-headline-md text-headline-md text-on-background">Featured Services</h2>
        <div className="flex gap-xs">
        <button className="p-2 rounded-full border border-outline-variant hover:bg-surface-container transition-colors">
        <span className="material-symbols-outlined" data-icon="chevron_left">chevron_left</span>
        </button>
        <button className="p-2 rounded-full border border-outline-variant hover:bg-surface-container transition-colors">
        <span className="material-symbols-outlined" data-icon="chevron_right">chevron_right</span>
        </button>
        </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
        <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:shadow-xl transition-shadow cursor-pointer group">
        <div className="relative h-48 overflow-hidden">
        <img alt="Professional Cleaning" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A brightly lit, modern kitchen with white marble countertops and minimalist wooden cabinets. A professional cleaner wearing a subtle teal uniform is meticulously polishing a surface, with soft morning light streaming through a large window. The scene is immaculate, peaceful, and reflects a premium corporate service standard." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRWrsiu-uXM-L4qvR_I71XNo1y2080s7L6JUVO9KPL2nkd1Dp1lxFtBkPsc5slseDC9_hxH8PzjbTzI6xAd-HzLFAsGaYwSX9X36HVFvzKinCRMbvavTgQN98Vrw3dsKe1_y3z25tuAxI0oJAiUFEVyN71UXW8FEy8FyXcloJgq0VZ-iqwCEkaoL5Z1Rm9dXiAItHwecjUv4UKwoQ5x4_VP5evaE-VM7fTgzvS9gzp8QIJzT61o6OzCvyK15J7s1YyV9ibywruVZze"/>
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
        <span className="material-symbols-outlined text-[18px] text-[#FFD700]" data-icon="star" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
        <span className="font-label-lg text-on-surface">4.9 (120)</span>
        </div>
        </div>
        <div className="p-sm">
        <div className="flex justify-between items-start mb-xs">
        <h3 className="font-headline-md text-headline-md text-on-background">Eco-Friendly Deep Cleaning</h3>
        <span className="font-headline-md text-primary">$45/hr</span>
        </div>
        <p className="font-body-sm text-on-surface-variant mb-md">Premium home cleaning using sustainable and organic materials.</p>
        <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-full bg-surface-container-high overflow-hidden">
        <img alt="Provider" data-alt="Close up portrait of a smiling woman with glasses, representing a trusted service professional. Soft lighting and warm tones." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcWSliFxZVMwV4JZ-_bo9DVtY7pOp2UKoaQ5hElgz-YWgaCeCAeuObwQ1o8L24RnmiEz7sEdgKHFQImuRubaMJw9kE-JzeSUXt_ZkRPVHD5BSKG2xwVrABz3Fx3kf_fqbEgqGvqRVzRlxpT5ipK-XcRUKWrlrr8mdboIMJzzJvyFKjGyqHq-vLXntH9Vrq8P8MfQM3Y5LBJ2d5UpDW4EFb6Q_v5jT9Ke7rxno6pSVwLxt9_36exT0KVXUbFgTTKJRkHXbDSR5K0y2K"/>
        </div>
        <span className="font-label-sm text-outline">By Sarah Jenkins</span>
        </div>
        </div>
        </div>
        <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:shadow-xl transition-shadow cursor-pointer group">
        <div className="relative h-48 overflow-hidden">
        <img alt="Expert Electrical" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A detailed shot of a modern electrical panel in a minimalist architectural space. A skilled electrician is working with clean, organized wiring using professional tools. The lighting is focused and clear, highlighting precision and safety within a high-end residential environment." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEpRD4PVoy8nDqvcy9t8y1FgASE1L1f0oBNJs75pdkH3sQYARAkzB-nk9mFuW8q287_muK4SCgfZt4qmfHep1cwx0GUIaYSiSl_NtFxH_5WAKpY99OkEmfkkmu3fV12n5xl1kkxtuA73cg6GCov8ZnQuajXMohTmsNXaZdIaDs2KerwcrS63PxgveCzqXkwRqs2oXECXnKQkfFjMQVmLpC3uVn1WkurZfOVSj6lMk7qr_4q3iuiZwGiaXnm0dTpmaz4YcXy7BL0dP5"/>
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
        <span className="material-symbols-outlined text-[18px] text-[#FFD700]" data-icon="star" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
        <span className="font-label-lg text-on-surface">4.8 (85)</span>
        </div>
        </div>
        <div className="p-sm">
        <div className="flex justify-between items-start mb-xs">
        <h3 className="font-headline-md text-headline-md text-on-background">Smart Home Installation</h3>
        <span className="font-headline-md text-primary">$120/job</span>
        </div>
        <p className="font-body-sm text-on-surface-variant mb-md">Complete setup for smart lighting, locks, and security systems.</p>
        <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-full bg-surface-container-high overflow-hidden">
        <img alt="Provider" data-alt="Portrait of a male professional technician in a clean polo shirt, looking confident and helpful." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1DdRBTD2uPTg2csTPqEIWqU6uL47ccJ2C30eWnDQO5mvXRBQMx5aA4tKAAxW2eniO7PAB4TZk62DH0qRWptLUij_tpjbZBU3dLd0meszFN58aOJJUiLn7EULY4zlgzLrzqYLJxCtjF8p9yMc_eC2ToPf5SLar5hBHuoYYrcZ-OX_F5-oXaP-nFdcFCN_068jnkAgT1Ej2fs6et-ZeYnGovlRV1RS23JaYIePF5hXLXQNmKEtd6ey5fWD8mutrrEBjIHQL3hOl6qQ7"/>
        </div>
        <span className="font-label-sm text-outline">By Michael Chen</span>
        </div>
        </div>
        </div>
        <div className="hidden lg:block bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:shadow-xl transition-shadow cursor-pointer group">
        <div className="relative h-48 overflow-hidden">
        <img alt="Interior Design" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A breathtakingly designed minimalist living room featuring a neutral color palette, natural textures, and large windows with soft diffused light. An interior designer is seen from behind, reviewing a digital mood board on a tablet. The space exudes elegance, connectivity, and modern luxury." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9oEXPaUgXMfp7JIJGhUsyr1KbMr8ibrDcYD7GyJEFWkmHdBv5ehO3bWTXCNplw-oA7jpaAWdnOK6kM20VTac-lSFlmiN_65PGS-TQ0V5te3rddewiLbnF6P-Qol9MVGM9vfsDaf7Vc_R-SOEJogyuiqfdiF1PeOs9excYXjytynQnpL1SpUdfQLN4q4A253TWydMrKHeT6d_H3iM6LkJxrOOHXqVwLrewmdGh0MNnP7YS2NSs-BsgoJ7FUPbMQaTi6-DV2gPqJ57o"/>
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
        <span className="material-symbols-outlined text-[18px] text-[#FFD700]" data-icon="star" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
        <span className="font-label-lg text-on-surface">5.0 (42)</span>
        </div>
        </div>
        <div className="p-sm">
        <div className="flex justify-between items-start mb-xs">
        <h3 className="font-headline-md text-headline-md text-on-background">Modern Space Refresh</h3>
        <span className="font-headline-md text-primary">$80/hr</span>
        </div>
        <p className="font-body-sm text-on-surface-variant mb-md">Full-service interior consulting and aesthetic planning for apartments.</p>
        <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-full bg-surface-container-high overflow-hidden">
        <img alt="Provider" data-alt="Portrait of a young creative professional woman with a welcoming expression." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoI82DO-4rVM2QiO4G-4Yy-t8pkxsyNxlCdEiCDc9p-TfimJ0HbSgFiaCZbYDwP3lgSW7qZHVtL2kaMM3O-c9FRkm82do2j1p3X5_FC5GQbJJh6NCKOQI92KQH5jAiaqejJpmIe_5uwK57VikB3LV_QEBRfODNjUQynW92427FuGdj-T5b1VPnmzMRnWFt8-jtiViJhhw7p1vFbbZcYbf5Ko_8-_Q777N7dYm6V0s-FS_guXuJ3lpTO8bGzxG4r3_idjJYQiIYKq_d"/>
        </div>
        <span className="font-label-sm text-outline">By Elena Rossi</span>
        </div>
        </div>
        </div>
        </div>
        </section>
        <section className="mt-xl px-margin-mobile md:px-margin-desktop mb-xl">
        <div className="bg-primary p-lg rounded-2xl flex flex-col md:flex-row items-center justify-between gap-lg overflow-hidden relative">
        <div className="z-10 text-center md:text-left">
        <h2 className="font-display-lg text-headline-lg text-on-primary mb-sm">Can't find what you need?</h2>
        <p className="font-body-lg text-on-primary/80 mb-md max-w-md">Post a custom job and let qualified professionals come to you with their best offers.</p>
        <button className="bg-secondary text-on-secondary px-lg py-sm rounded-xl font-label-lg shadow-lg hover:brightness-110 active:scale-95 transition-all">Post a Job Now</button>
        </div>
        <div className="relative md:absolute md:right-0 md:top-0 h-40 md:h-full w-full md:w-1/3 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-l from-primary to-transparent z-20"></div>
        <img alt="Teamwork" data-alt="Silhouettes of professional people collaborating in a bright, modern office with floor-to-ceiling windows." src="https://lh3.googleusercontent.com/aida-public/AB6AXuATCo646pDuyeM3UM0yVkAgSaE-XbK9x4N1aNuX6aIA0bPwMmMudRKizRx_FRJgrwUEM_ve9VA5LSBUCKfqCtiIO4HnMxKTG1tSMVhVeAmPV2kQoVOlhlxOvq9rd-wmJDwmvoJESlJntceeFCH0W9cPOLO8ZX_LzQrmx1GgnI8IsofkP7_xrSUb8IfiqV1XZVlAgt99zCfeJsmxs5TvwSSNWimkf2VMsWRIMSiYVZ3N8xAe62cPEQ4dXKwUyIwaciRZ_TytMlpgBhTu"/>
        </div>
        </div>
        </section>
        </main>
        <button className="fixed right-margin-mobile bottom-24 md:bottom-28 z-50 bg-secondary text-on-secondary flex items-center gap-xs px-sm py-4 rounded-full shadow-lg hover:shadow-xl active:scale-95 transition-all">
        <span className="material-symbols-outlined" data-icon="add">add</span>
        <span className="font-label-lg">Post a Job</span>
        </button>
        <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center bg-surface px-2 pb-xs pt-base shadow-[0_-4px_16px_rgba(0,0,0,0.08)] rounded-t-xl">
        <a className="flex flex-col items-center justify-center bg-primary-container text-on-primary-container rounded-xl px-4 py-1 active:scale-90 duration-100" href="#">
        <span className="material-symbols-outlined" data-icon="home" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>home</span>
        <span className="font-label-sm text-label-sm">Home</span>
        </a>
        <a className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1 hover:text-primary transition-colors active:scale-90 duration-100" href="#">
        <span className="material-symbols-outlined" data-icon="work" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>work</span>
        <span className="font-label-sm text-label-sm">Opportunities</span>
        </a>
        <a className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1 hover:text-primary transition-colors active:scale-90 duration-100" href="#">
        <span className="material-symbols-outlined" data-icon="chat_bubble">chat_bubble</span>
        <span className="font-label-sm text-label-sm">Messages</span>
        </a>
        <a className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1 hover:text-primary transition-colors active:scale-90 duration-100" href="#">
        <span className="material-symbols-outlined" data-icon="person">person</span>
        <span className="font-label-sm text-label-sm">Profile</span>
        </a>
        </nav>
        </>
    )
}