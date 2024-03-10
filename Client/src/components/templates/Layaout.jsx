import { Header } from "./Header";
import { Footer } from "./Footer"

import PropTypes from 'prop-types'

export function Layaout({ children }) {

    return (
        <main
            className="bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))]
        from-[#451693] from-40% via-[#370d7d] via-60% to-[#190042] 
        to-90%  dark:bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))]
        dark:from-[#F5E1CE] dark:via-[#EEDAC7] dark:to-[#be9e7d] 
        flex flex-col min-h-screen gap-20 xl:gap-32 z-[-10]"
        >
            <Header></Header>

            {children}

            <Footer></Footer>
        </main>
    )

}

Layaout.propTypes = {
    children: PropTypes.node
}

