import { ArrowLeft, CheckCircle, Lightbulb, Heart } from 'lucide-react';

const Guide = () => {
  const steps = [
    {
      title: 'Why Meditate?',
      description: 'Meditation reduces stress and anxiety, improves focus, and enhances emotional well-being. It literally rewires your brain for peace.',
      icon: <Heart className="h-6 w-6" />,
      benefits: ['Better sleep quality', 'Reduced anxiety & stress', 'Improved focus & clarity', 'Emotional resilience'],
    },
    {
      title: 'How to Start',
      description: "You don't need experience. Just find a comfortable spot, close your eyes, and follow your breath. That's it!",
      icon: <Lightbulb className="h-6 w-6" />,
      steps: ['Find a quiet, comfortable place', 'Sit or lie down (whatever feels right)', 'Close your eyes', 'Focus on your natural breath', 'When your mind wanders, gently bring it back'],
    },
    {
      title: 'Building Consistency',
      description: 'The magic happens through regular practice. Start small and build from there.',
      icon: <CheckCircle className="h-6 w-6" />,
      tips: ['Start with just 5 minutes', 'Same time every day (ideally morning)', 'Track your sessions', 'Be patient with yourself', 'Celebrate small wins'],
    },
  ];

  return (
    <div className="from-secondary/10 via-background to-primary/5 min-h-screen bg-gradient-to-br p-6">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 flex items-center gap-4 anim-fade-down">
          <a href="/">
            <button className="hover:bg-secondary/20 rounded-full p-2 transition-colors">
              <ArrowLeft className="h-5 w-5" />
            </button>
          </a>
          <div>
            <h1 className="font-heading text-foreground text-4xl font-bold">Beginner's Guide</h1>
            <p className="text-muted-foreground">Start your meditation journey with us</p>
          </div>
        </div>

        <div className="space-y-8">
          {steps.map((step, idx) => (
            <div key={idx} className="reveal" style={{ transitionDelay: `${idx * 0.1}s` }}>
              <div className="bg-card overflow-hidden rounded-2xl border-none shadow-lg transition-shadow hover:shadow-xl">
                <div className="p-8">
                  <div className="mb-4 flex items-center gap-4">
                    <div className="bg-primary/20 text-primary flex h-12 w-12 items-center justify-center rounded-full">{step.icon}</div>
                    <div>
                      <h2 className="font-heading text-foreground text-2xl font-bold">{step.title}</h2>
                      <p className="text-muted-foreground text-sm">Step {idx + 1} of {steps.length}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{step.description}</p>
                  <div className="space-y-2">
                    {(step.benefits || step.steps || step.tips)?.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle className="text-primary mt-1 h-5 w-5 flex-shrink-0" />
                        <span className="text-foreground/80">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal bg-primary/10 mt-12 rounded-2xl p-8 text-center">
          <h2 className="font-heading text-foreground mb-3 text-2xl font-bold">Ready to begin? 🐱</h2>
          <p className="text-muted-foreground mb-6">Start with our meditation timer and pick a breathing technique that resonates with you.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/app">
              <button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 py-2 font-bold shadow-lg transition-all hover:shadow-xl">Start Meditating</button>
            </a>
            <a href="/explore">
              <button className="border-primary text-primary hover:bg-primary/10 rounded-full border-2 px-6 py-2 font-bold transition-colors">Explore Techniques</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guide;
