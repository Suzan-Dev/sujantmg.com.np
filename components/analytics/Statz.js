import Script from 'next/script'

const StatzScript = () => {
  return (
    <>
      <Script
        strategy="lazyOnload"
        data-domain="sujantmg.com.np"
        src="https://cdn.statz.dev/script.js"
      />
    </>
  )
}

export default StatzScript
