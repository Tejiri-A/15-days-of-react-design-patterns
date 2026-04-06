import Card from "./Components/Card";
import Tabs from "./Components/Tabs";

function App() {
  return (
    <main className="container mx-auto p-12 min-h-screen">
      <h1 className="text-4xl font-extrabold text-center mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent underline decoration-accent/20 underline-offset-8">
        Compound Pattern Showreel
      </h1>

      <div className="flex flex-col gap-16 max-w-5xl mx-auto">
        {/* 1. Classic Vertical Card (Image Top) */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-base-content/70 flex items-center gap-2">
            <span className="badge badge-primary badge-sm">01</span> Classic Product Card
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="w-80">
              <Card>
                <Card.Image src="/images/smartwatch.png" className="h-48" />
                <Card.Header>
                  <h3 className="text-lg">Pro Watch</h3>
                </Card.Header>
                <Card.Body>
                  <p className="text-sm">Classic layout with image at the top.</p>
                </Card.Body>
                <Card.Footer className="justify-end">
                  <button className="btn btn-primary btn-sm">Buy Now</button>
                </Card.Footer>
              </Card>
            </div>
            <div className="prose prose-sm text-base-content/80">
              <h4 className="font-bold">Structure:</h4>
              <code className="block bg-base-200 p-2 rounded">
                &lt;Card&gt;<br />
                &nbsp;&nbsp;&lt;Card.Image /&gt;<br />
                &nbsp;&nbsp;&lt;Card.Header /&gt;<br />
                &nbsp;&nbsp;&lt;Card.Body /&gt;<br />
                &nbsp;&nbsp;&lt;Card.Footer /&gt;<br />
                &lt;/Card&gt;
              </code>
            </div>
          </div>
        </section>

        {/* 2. Horizontal Card (Using Styling props) */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-base-content/70 flex items-center gap-2 text-right justify-end">
            Horizontal Spotlight <span className="badge badge-accent badge-sm">02</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="prose prose-sm text-right order-2 md:order-1 text-base-content/80">
              <h4 className="font-bold">Structure (Flex Row):</h4>
              <code className="block bg-base-200 p-2 rounded text-left">
                &lt;Card className="lg:flex-row h-56"&gt;<br />
                &nbsp;&nbsp;&lt;Card.Image className="lg:w-1/2 h-full" /&gt;<br />
                &nbsp;&nbsp;&lt;Card.Body /&gt;<br />
                &lt;/Card&gt;
              </code>
            </div>
            <div className="order-1 md:order-2">
              <Card className="flex flex-col md:flex-row h-auto md:h-64">
                <Card.Image 
                  src="/images/laptop.png" 
                  className="w-full md:w-1/2 h-48 md:h-full shrink-0" 
                />
                <div className="flex flex-col flex-1 justify-center">
                  <Card.Header>
                    <h3 className="text-xl">UltraBook Pro</h3>
                  </Card.Header>
                  <Card.Body>
                    <p className="text-sm">Redefining performance and portability.</p>
                  </Card.Body>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* 3. Title-First Info Card (Swap Header and Image) */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-base-content/70 flex items-center gap-2">
            <span className="badge badge-secondary badge-sm">03</span> Title First (Header Top)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="w-80">
              <Card className="border-secondary/20">
                <Card.Header className="bg-secondary/5">
                  <h3 className="text-lg">Photography Masterclass</h3>
                </Card.Header>
                <Card.Image src="/images/camera.png" className="h-40 grayscale hover:grayscale-0 transition-all duration-500" />
                <Card.Body>
                  <p className="text-sm italic">Capture the world in stunning detail.</p>
                </Card.Body>
                <Card.Footer>
                  <button className="btn btn-secondary btn-outline btn-block btn-sm">Enroll Free</button>
                </Card.Footer>
              </Card>
            </div>
            <div className="prose prose-sm text-base-content/80">
              <p>Reordering components is trivial with this pattern.</p>
              <code className="block bg-base-200 p-2 rounded">
                &lt;Card&gt;<br />
                &nbsp;&nbsp;&lt;Card.Header /&gt;<br />
                &nbsp;&nbsp;&lt;Card.Image /&gt;<br />
                &nbsp;&nbsp;&lt;Card.Body /&gt;<br />
                &lt;/Card&gt;
              </code>
            </div>
          </div>
        </section>

        {/* 4. Action-First / Promo Card (Footer Top) */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-base-content/70 flex items-center gap-2 text-right justify-end">
            Discount Promo <span className="badge badge-warning badge-sm">04</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="prose prose-sm text-right order-2 md:order-1 text-base-content/80">
              <p>You can even put the footer at the top for labels or quick actions.</p>
              <code className="block bg-base-200 p-2 rounded text-left">
                &lt;Card&gt;<br />
                &nbsp;&nbsp;&lt;Card.Footer /&gt;<br />
                &nbsp;&nbsp;&lt;Card.Image /&gt;<br />
                &nbsp;&nbsp;&lt;Card.Body /&gt;<br />
                &lt;/Card&gt;
              </code>
            </div>
            <div className="w-80 ml-auto order-1 md:order-2">
              <Card className="border-warning bg-warning/5 overflow-visible">
                <Card.Footer className="p-0">
                  <div className="bg-warning text-warning-content px-4 py-1 rounded-br-lg text-xs font-bold -mt-1 ml-4 shadow-sm inline-block">
                    50% OFF TODAY
                  </div>
                </Card.Footer>
                <Card.Image src="/images/coffee_beans.png" className="h-48 mt-2 p-4 rounded-3xl" />
                <Card.Body className="text-center">
                  <h3 className="text-xl font-black">Flash Sale!</h3>
                  <p className="text-xs">Premium Ethiopian Blend.</p>
                </Card.Body>
              </Card>
            </div>
          </div>
        </section>

        {/* 5. Minimalist Blog Card (Headers and Footer Only) */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-base-content/70 flex items-center gap-2">
             Minimal Text Card <span className="badge badge-ghost badge-sm">05</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <Card className="max-w-sm border-t-4 border-t-primary shadow-2xl">
                <Card.Header>
                  <h3 className="text-xl font-serif">The Art of Code Design</h3>
                </Card.Header>
                <Card.Body>
                  <p className="text-sm opacity-70">
                    Exploring how composition patterns can simplify large-scale React applications and improve developer productivity...
                  </p>
                </Card.Body>
                <Card.Footer>
                  <div className="flex gap-2">
                    <span className="badge badge-ghost">Design</span>
                    <span className="badge badge-ghost">React</span>
                  </div>
                </Card.Footer>
              </Card>
            </div>
            <div className="prose prose-sm text-base-content/80">
              <p>Omit what you don't need. The compound pattern doesn't enforce a fixed set of sub-components.</p>
              <code className="block bg-base-200 p-2 rounded">
                &lt;Card&gt;<br />
                &nbsp;&nbsp;&lt;Card.Header /&gt;<br />
                &nbsp;&nbsp;&lt;Card.Body /&gt;<br />
                &nbsp;&nbsp;&lt;Card.Footer /&gt;<br />
                &lt;/Card&gt;
              </code>
            </div>
          </div>
        </section>
        {/* 6. Tabs (Context-Free Pattern) */}
        <section className="bg-base-200/30 p-8 rounded-3xl border border-dashed border-base-content/10 mt-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 w-full order-2 md:order-1">
              <Tabs defaultValue="overview">
                <Tabs.List>
                  <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
                  <Tabs.Trigger value="specs">Specifications</Tabs.Trigger>
                  <Tabs.Trigger value="reviews">Reviews</Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content value="overview">
                  <div className="space-y-4">
                    <h3 className="font-bold text-lg text-primary">Product Overview</h3>
                    <p className="text-sm">
                      This wireless headphone captures every detail of your music with unparalleled clarity.
                      Features active noise cancellation and a 30-hour battery life.
                    </p>
                  </div>
                </Tabs.Content>
                <Tabs.Content value="specs">
                  <table className="table table-zebra table-sm">
                    <tbody>
                      <tr>
                        <td>Driver Unit</td>
                        <td>40mm Dome Type</td>
                      </tr>
                      <tr>
                        <td>Sensitivity</td>
                        <td>105 dB/mW</td>
                      </tr>
                      <tr>
                        <td>Frequency</td>
                        <td>4Hz - 40,000Hz</td>
                      </tr>
                    </tbody>
                  </table>
                </Tabs.Content>
                <Tabs.Content value="reviews">
                  <div className="chat chat-start">
                    <div className="chat-bubble">These are the best headphones I've ever owned! ⭐⭐⭐⭐⭐</div>
                  </div>
                  <div className="chat chat-end mt-2">
                    <div className="chat-bubble chat-bubble-accent">Great sound, but a bit heavy for gym. ⭐⭐⭐⭐</div>
                  </div>
                </Tabs.Content>
              </Tabs>
            </div>
            <div className="prose prose-sm flex-1 order-1 md:order-2">
              <h2 className="text-2xl font-bold flex items-center gap-2 m-0">
                <span className="badge badge-primary badge-sm">06</span> Context-Free Tabs
              </h2>
              <p className="mt-4">
                This tab system works without <code>Context API</code>. It uses <code>React.Children.map</code> 
                and <code>React.cloneElement</code> to inject state into children components.
              </p>
              <div className="bg-base-300 p-4 rounded-xl text-[10px] sm:text-xs">
                <code className="block">
                  &lt;Tabs defaultValue="overview"&gt;<br />
                  &nbsp;&nbsp;&lt;Tabs.List&gt;...&lt;/Tabs.List&gt;<br />
                  &nbsp;&nbsp;&lt;Tabs.Content value="overview"&gt;...&lt;/Tabs.Content&gt;<br />
                  &lt;/Tabs&gt;
                </code>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
