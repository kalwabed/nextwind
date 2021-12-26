import TopNavigation from './top-navigation'

const Page: React.FC = ({ children }) => {
  return (
    <main className="relative min-h-screen flex-auto w-full flex flex-col">
      <TopNavigation />
      {children}
    </main>
  )
}

export default Page
