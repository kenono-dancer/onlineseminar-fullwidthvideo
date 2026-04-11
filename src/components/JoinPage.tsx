import { useState, useEffect } from 'react';
import { ArrowLeft, Mail, Heart, Users, PawPrint } from 'lucide-react';

const Join = () => {
  const [email, setEmail] = useState('');
  const [joined, setJoined] = useState(false);
  const [error, setError] = useState('');
  const [members, setMembers] = useState(0);

  useEffect(() => {
    const clowderMembers = JSON.parse(localStorage.getItem('clowderMembers') || '[]');
    setMembers(clowderMembers.length);
  }, []);

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) { setError('Please enter your email'); return; }
    if (!email.includes('@')) { setError('Please enter a valid email'); return; }
    const clowderMembers = JSON.parse(localStorage.getItem('clowderMembers') || '[]');
    if (!clowderMembers.includes(email)) {
      clowderMembers.push(email);
      localStorage.setItem('clowderMembers', JSON.stringify(clowderMembers));
      setMembers(clowderMembers.length);
    }
    setJoined(true);
    setEmail('');
    setError('');
  };

  return (
    <div className="from-primary/10 via-background to-accent/10 flex min-h-screen flex-col bg-gradient-to-br p-6">
      <div className="mx-auto w-full max-w-2xl anim-fade-down">
        <a href="/">
          <button data-testid="button-back-join" className="hover:bg-secondary/20 mb-6 rounded-full p-2 transition-colors">
            <ArrowLeft className="h-5 w-5" />
          </button>
        </a>
      </div>

      <div className="mx-auto flex w-full max-w-2xl flex-1 items-center justify-center">
        <div className="w-full anim-fade-in anim-delay-100">
          <div className="bg-card/95 overflow-hidden rounded-[2rem] border-none shadow-2xl backdrop-blur-xl">
            <div className="flex flex-col items-center gap-8 p-12 text-center md:p-16">
              {!joined ? (
                <>
                  <div className="space-y-4 anim-fade-up">
                    <div className="flex justify-center">
                      <div className="bg-primary/20 flex h-20 w-20 items-center justify-center rounded-full">
                        <PawPrint className="text-primary h-10 w-10" />
                      </div>
                    </div>
                    <h1 className="font-heading text-foreground text-4xl font-bold md:text-5xl">Join the Clowder</h1>
                    <p className="text-muted-foreground mx-auto max-w-md text-lg leading-relaxed">
                      A clowder is a group of cats. Join our community of zen-seekers and cat lovers worldwide.
                    </p>
                  </div>

                  <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-3 anim-fade-up anim-delay-200">
                    <div className="space-y-2">
                      <Mail className="text-primary mx-auto h-6 w-6" />
                      <p className="text-foreground text-sm font-bold">Weekly Tips</p>
                      <p className="text-muted-foreground text-xs">Weekly zen tips and affirmations</p>
                    </div>
                    <div className="space-y-2">
                      <Heart className="text-primary mx-auto h-6 w-6" />
                      <p className="text-foreground text-sm font-bold">Community</p>
                      <p className="text-muted-foreground text-xs">Connect with our meditation community</p>
                    </div>
                    <div className="space-y-2">
                      <Users className="text-primary mx-auto h-6 w-6" />
                      <p className="text-foreground text-sm font-bold">Exclusive</p>
                      <p className="text-muted-foreground text-xs">Access member-only content</p>
                    </div>
                  </div>

                  <form onSubmit={handleJoin} className="w-full space-y-4 anim-fade-up" style={{ animationDelay: '0.3s' }}>
                    <div className="flex flex-col gap-3 sm:flex-row">
                      <input
                        type="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value); setError(''); }}
                        data-testid="input-email-join"
                        className="bg-secondary/20 focus:border-primary flex-1 rounded-full border-2 border-transparent px-6 py-4 text-lg transition-all focus:outline-none"
                      />
                      <button data-testid="button-join-submit" className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 active:scale-95 rounded-full px-8 py-3 font-bold shadow-lg transition-transform">
                        Join Now
                      </button>
                    </div>
                    {error && <p className="text-sm font-medium text-red-500 anim-fade-in">{error}</p>}
                  </form>

                  <div className="border-border/40 w-full border-t pt-6 anim-fade-in" style={{ animationDelay: '0.4s' }}>
                    <div className="flex items-center justify-center gap-6 text-sm">
                      <div>
                        <p className="text-foreground text-lg font-bold">{members}+</p>
                        <p className="text-muted-foreground">Clowder Members</p>
                      </div>
                      <div className="bg-border/40 h-8 w-px" />
                      <div>
                        <p className="text-foreground text-lg font-bold">24/7</p>
                        <p className="text-muted-foreground">Support Available</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-xs anim-fade-in" style={{ animationDelay: '0.5s' }}>
                    We respect your privacy. No spam, just zen. Ever. 🐱
                  </p>
                </>
              ) : (
                <div className="w-full space-y-6 anim-fade-in">
                  <div className="flex justify-center">
                    <div className="flex h-24 w-24 items-center justify-center rounded-full bg-green-100">
                      <Heart className="h-12 w-12 fill-current text-green-600" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h2 className="font-heading text-foreground text-3xl font-bold">Welcome to the Clowder!</h2>
                    <p className="text-muted-foreground text-lg">You're now part of our cat-loving community. Check your email for exclusive content! 📧</p>
                  </div>
                  <div className="space-y-3 pt-4">
                    <p className="text-foreground font-bold">What's next?</p>
                    <div className="mx-auto max-w-sm space-y-2 text-left">
                      <p className="flex items-start gap-2 text-sm"><span className="text-primary font-bold">✓</span><span>Weekly meditation tips delivered to your inbox</span></p>
                      <p className="flex items-start gap-2 text-sm"><span className="text-primary font-bold">✓</span><span>Exclusive breathing techniques & affirmations</span></p>
                      <p className="flex items-start gap-2 text-sm"><span className="text-primary font-bold">✓</span><span>Join our growing community of zen-seekers</span></p>
                    </div>
                  </div>
                  <div className="pt-4">
                    <a href="/app">
                      <button data-testid="button-start-meditation" className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 active:scale-95 rounded-full px-8 py-3 font-bold transition-transform">
                        Start Meditating Now
                      </button>
                    </a>
                  </div>
                  <a href="/" className="inline-block">
                    <button data-testid="button-back-home-join" className="border-primary text-primary hover:bg-primary/10 rounded-full border-2 px-8 py-2 transition-colors">
                      Back to Home
                    </button>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
