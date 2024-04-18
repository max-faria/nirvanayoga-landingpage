import { AnimatePresence, motion } from "framer-motion"
import { ButtonsContainer, LoginButton, MobileMenu, NavButton, SectionButtons } from "../styles"

interface MobileMenuInterface {
    isMenuOpen: boolean,
    setMenuOpen: (isOpen: boolean) => void,
}

const variants = {
    open: { opacity: 1, x: "0%" },
    closed: { opacity: 0, x: "-100%" },
};

const MobileMenuComponent: React.FC<MobileMenuInterface> = ( props ) => {

    return (
        <AnimatePresence mode="wait">
        {props.isMenuOpen && (
          <motion.div
            key="mobile-nav"
            initial="closed"
            animate={props.isMenuOpen ? "open" : "closed"}
            variants={variants}
            exit="closed"
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <MobileMenu>
              <SectionButtons>
                <NavButton onClick={() => props.setMenuOpen(false)}>
                  <a href="#">Home</a>{" "}
                </NavButton>
                <NavButton onClick={() => props.setMenuOpen(false)}>
                  <a href="#about-us">About us</a>
                </NavButton>
                <NavButton onClick={() => props.setMenuOpen(false)}>
                  <a href="#classes">Classes</a>
                </NavButton>
                <NavButton onClick={() => props.setMenuOpen(false)}>
                  <a href="#pricing">Pricing</a>
                </NavButton>
                <NavButton onClick={() => props.setMenuOpen(false)}>
                  <a href="#teachers">Teachers</a>
                </NavButton>
              </SectionButtons>
              <ButtonsContainer>
                <LoginButton onClick={() => props.setMenuOpen(false)}>
                  Login
                </LoginButton>
                <LoginButton onClick={() => props.setMenuOpen(false)}>
                  Try free for 7 days
                </LoginButton>
              </ButtonsContainer>
            </MobileMenu>
          </motion.div>
        )}
      </AnimatePresence>
    )
}

export default MobileMenuComponent