import Header from './components/Header'
import Hero from './components/Hero'
import NavTabs from './components/NavTabs'
import AboutTeam from './components/AboutTeam'
import Acquisitions from './components/Acquisitions'
import KeyConcepts from './components/KeyConcepts'
import Processes from './components/Processes'
import RecommendedReads from './components/RecommendedReads'
import Glossary from './components/Glossary'
import Tips from './components/Tips'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <NavTabs />
      <main>
        <AboutTeam />
        <Acquisitions />
        <KeyConcepts />
        <Processes />
        <RecommendedReads />
        <Glossary />
        <Tips />
      </main>
      <Footer />
    </>
  )
}
