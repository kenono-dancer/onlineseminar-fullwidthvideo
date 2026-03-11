import { motion, AnimatePresence } from 'framer-motion';
import {
  Heart,
  Sparkles,
  Menu,
  X,
  Users,
  BookOpen,
  Compass,
  Star,
  Lock,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Dumbbell,
  Video,
  Activity,
  PlayCircle,
  User,
  Target,
  Smartphone,
  Zap,
  Coins,
} from 'lucide-react';
import { useState, useEffect } from 'react';



const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-[90vh] flex-col items-center overflow-hidden px-6 py-12 md:flex-row md:px-12 lg:px-24"
    >
      {/* Decorative Blobs */}
      <div className="bg-primary/10 absolute top-[-10%] left-[-10%] -z-10 h-[500px] w-[500px] rounded-full blur-3xl" />
      <div className="bg-accent/30 absolute right-[-5%] bottom-[10%] -z-10 h-[400px] w-[400px] rounded-full blur-3xl" />

      <div className="relative z-10 w-full space-y-8 md:w-1/2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-hand text-primary mb-4 inline-block -rotate-2 text-2xl">
            自宅から参加できる
          </span>
          <h1 className="font-heading text-foreground mb-6 text-4xl leading-[1.1] font-bold md:text-6xl">
            「なんとなく」のダンスから
            <br />
            <span className="text-primary relative inline-block">
              卒業しませんか？
              <svg
                className="text-accent absolute -bottom-1 left-0 -z-10 h-3 w-full"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 5 Q 50 10 100 5"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                />
              </svg>
            </span>
          </h1>
          <p className="text-muted-foreground max-w-md text-base leading-relaxed md:text-lg">
            社交ダンスを、もっと深く、正しく、美しく。<br />
            運動学と機能解剖学という「地図」を持てば、上達への迷いはなくなります。<br />
            社交ダンスの理論が求める理想のポスチャーや動きを、骨格レベルから再構築しましょう。<br />
            <span className="text-primary font-bold">一緒に学び練習し、身につけましょう。</span>
          </p>

          {/* Trust Badges */}
          <motion.div
            className="flex flex-wrap gap-4 pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {[
              { icon: Star, label: '【A級プロが講師】', color: 'text-yellow-600' },
              { icon: Lock, label: '【セミナーは無料】', color: 'text-green-600' },
              {
                icon: CheckCircle,
                label: '【機能解剖学】',
                color: 'text-purple-600',
              },
              { icon: Heart, label: '【500回以上継続】', color: 'text-red-600' },
            ].map((badge, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + idx * 0.1 }}
                className="bg-secondary/30 border-border/40 flex items-center justify-center gap-2 rounded-full border px-3 py-2"
              >
                <badge.icon
                  className={`h-4 w-4 flex-shrink-0 ${badge.color}`}
                />
                <span className="text-foreground text-xs font-semibold">
                  {badge.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <div className="relative mt-12 w-full md:mt-0 md:w-1/2">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative z-10"
        >
          <img
            src="/images/cute_fluffy_cat_sleeping_on_a_cloud.png"
            alt="Sleeping zen cat on a cloud"
            className="h-auto w-full transform rounded-[3rem] shadow-2xl transition-transform duration-700 hover:rotate-0 md:rotate-3"
          />

          {/* Floating Cards */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            className="bg-card absolute -bottom-8 -left-4 flex max-w-[200px] items-center gap-3 rounded-2xl p-4 shadow-lg md:left-10"
          >
            <div className="rounded-full bg-green-100 p-2 text-green-600">
              <Sparkles size={20} />
            </div>
            <div>
              <p className="text-sm font-bold">無料で参加</p>
              <p className="text-muted-foreground text-[10px]">社交ダンスセミナー</p>
            </div>
          </motion.div>

          {/* Second Badge */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: 'easeInOut',
              delay: 0.5,
            }}
            className="bg-card absolute -top-4 -right-4 flex max-w-[200px] items-center gap-3 rounded-2xl p-4 shadow-lg md:-right-8"
          >
            <div className="rounded-full bg-blue-100 p-2 text-blue-600">
              <Users size={20} />
            </div>
            <div>
              <p className="text-sm font-bold">500回以上開催</p>
              <p className="text-muted-foreground text-xs">since 2018</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const FeatureCard = ({
  title,
  desc,
  img,
  delay,
  testId,
}: {
  title: string;
  desc: string;
  img: string;
  delay: number;
  testId: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -10 }}
    data-testid={testId}
  >
    <div className="bg-card h-full overflow-hidden rounded-[2rem] border-none shadow-lg transition-shadow duration-300 hover:shadow-xl">
      <div className="flex h-full flex-col p-0">
        <div className="bg-secondary/30 flex h-48 items-center justify-center p-8">
          <motion.img
            src={img}
            alt={title}
            className="h-32 w-auto object-contain drop-shadow-md"
            whileHover={{ scale: 1.1 }}
          />
        </div>
        <div className="flex flex-1 flex-col items-center p-8 text-center">
          <h3 className="font-heading text-foreground mb-3 text-2xl font-bold">
            {title}
          </h3>
          <p className="text-muted-foreground leading-relaxed">{desc}</p>
        </div>
      </div>
    </div>
  </motion.div>
);

export interface Post {
  id: string;
  title: string;
  description: string;
  heroImage: string;
}

const Features = ({ posts = [] }: { posts?: Post[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + 3 >= posts.length ? 0 : prev + 3
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev - 3 < 0 ? Math.max(0, posts.length - 3) : prev - 3
    );
  };

  const visiblePosts = posts.slice(currentIndex, currentIndex + 3);

  return (
    <section
      id="features"
      className="relative bg-white/50 px-6 py-24 md:px-12 lg:px-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 space-y-4 text-center">
          <span className="font-hand text-primary text-xl">
            誰でも無料で参加できる
          </span>
          <h2 className="font-heading text-foreground text-4xl font-bold md:text-5xl">
            オンライン社交ダンスセミナー
          </h2>
        </div>

        <div className="relative">
          {posts.length > 3 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-[-20px] md:left-[-50px] top-1/2 -translate-y-1/2 bg-card text-primary hover:bg-primary hover:text-white p-2 md:p-3 rounded-full shadow-md transition-colors z-10"
                aria-label="Previous posts"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-[-20px] md:right-[-50px] top-1/2 -translate-y-1/2 bg-card text-primary hover:bg-primary hover:text-white p-2 md:p-3 rounded-full shadow-md transition-colors z-10"
                aria-label="Next posts"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {posts.length > 0 ? (
              visiblePosts.map((post, idx) => (
                <a href={`/blog/${post.id}`} key={post.id} className="block w-full">
                  <FeatureCard
                    title={post.title}
                    desc={(post.description || '').substring(0, 100) + ((post.description && post.description.length > 100) ? '...' : '')}
                    img={post.heroImage || '/images/meditating_cat_illustration.png'}
                    delay={0.1 * (idx + 1)}
                    testId={`card-feature-${idx}`}
                  />
                </a>
              ))
            ) : (
              <>
                <FeatureCard
                  title="Master of Chill"
                  desc="Learn the ancient art of doing absolutely nothing and looking fabulous while doing it."
                  img="/images/meditating_cat_illustration.png"
                  delay={0.1}
                  testId="card-feature-chill"
                />
                <FeatureCard
                  title="Playful Spirit"
                  desc="Rediscover your inner kitten. Chase dreams (and butterflies) with reckless abandon."
                  img="/images/playful_cat_illustration.png"
                  delay={0.2}
                  testId="card-feature-playful"
                />
                <FeatureCard
                  title="Soul Nourishment"
                  desc="Feed your heart with unconditional love, head bumps, and the occasional slow blink."
                  img="/images/cat_with_food_illustration.png"
                  delay={0.3}
                  testId="card-feature-nourishment"
                />
              </>
            )}
          </div>
        </div>

        {posts.length > 0 && (
          <div className="mt-8 flex justify-end">
            <a
              href="/blog"
              className="font-heading text-primary hover:text-primary/80 font-bold flex items-center gap-1 transition-colors group"
            >
              一覧へ
              <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

const Community = () => {
  const testimonials = [
    {
      name: '社交ダンスに必要な',
      role: '体幹トレーニングに特化',
      quote:
        '美しく踊るために欠かせないインナーマッスルを効率的に鍛えます。ダンス理論に基づいたトレーニングで、軸의ブレない安定した踊りを手に入れましょう。',
      icon: <Activity className="text-primary h-8 w-8" />,
    },
    {
      name: '録画も見られる',
      role: 'Youtube 限定動画',
      quote:
        '全てのレッスンは録画され、限定公開動画として何度も復習可能です。リアルタイムで参加できない日も、後から自分の好きなタイミングで練習できます.',
      icon: <PlayCircle className="text-primary h-8 w-8" />,
    },
    {
      name: '25分 1,000円',
      role: '最大4人まで',
      quote:
        '少人数制のクラスなので、一人ひとりの動きをしっかりとチェック。低価格ながらも、パーソナルに近いきめ細やかなアドバイスが受けられます。',
      icon: <Coins className="text-primary h-8 w-8" />,
    },
  ];

  return (
    <section id="community" className="relative px-6 py-24 md:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 space-y-4 text-center">
          <span className="font-hand text-primary text-xl">
            社交ダンスに特化した
          </span>
          <h2 className="font-heading text-foreground text-4xl font-bold md:text-5xl">
            オンライン体幹トレーニング
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((person, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="bg-card h-full rounded-[2rem] border-none shadow-lg transition-shadow duration-300 hover:shadow-xl">
                <div className="flex h-full flex-col p-8">
                  <div className="mb-6 flex items-center gap-4">
                    <div className="bg-primary/15 flex h-14 w-14 items-center justify-center rounded-full shrink-0">
                      {person.icon}
                    </div>
                    <div>
                      <p className="font-heading text-foreground font-bold leading-tight">
                        {person.name}
                      </p>
                      <p className="text-muted-foreground text-sm mt-1">
                        {person.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground flex-1 leading-relaxed">
                    {person.quote}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 flex justify-end">
          <a
            href="/body-training/"
            className="font-heading text-primary hover:text-primary/80 font-bold flex items-center gap-1 transition-colors group"
          >
            詳細へ
            <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

const QuoteSection = () => {
  return (
    <section
      id="wisdom"
      className="bg-secondary/20 flex flex-col items-center justify-center px-6 py-24 text-center"
    >
      <div className="mb-12 space-y-4 text-center">
        <span className="font-hand text-primary text-xl">
          講師紹介
        </span>
        <h2 className="font-heading text-foreground text-4xl font-bold md:text-5xl">
          大埜 健（おおの けん）
        </h2>
      </div>

      <motion.div
        className="relative max-w-4xl flex flex-col md:flex-row items-center gap-10 bg-card p-8 md:p-12 rounded-[2rem] shadow-lg text-left"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src="/assets/images/ken_ono_3.png"
            alt="大埜 健"
            className="w-48 h-48 md:w-full md:h-auto rounded-full md:rounded-2xl object-cover shadow-md"
          />
        </div>

        <div className="w-full md:w-2/3 space-y-4">
          <h3 className="text-2xl font-bold font-heading text-primary">元JBDFプロスタンダードA級 / 元アマ全日本ファイナリスト</h3>
          <p className="text-muted-foreground leading-relaxed">
            東京都品川区でプロの社交ダンスインストラクターとして活動し、オンラインでの無料社交ダンスセミナーやプライベートレッスン、体幹トレーニングを提供しています。<br /><br />
            IT業界での経験を活かし、ダンス界のデジタル化やオンラインレッスンの普及にも注力。解剖学や運動理論・トレーニング経験に基づいた科学的アプローチで、皆様の確実な上達をサポートいたします。
          </p>

          <div className="pt-6 border-t border-border mt-6">
            <a
              href="/ken-ono/"
              className="inline-flex items-center gap-2 font-heading bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 py-3 font-bold shadow-md transition-all hover:translate-y-[-2px] hover:shadow-xl"
            >
              プロフィール全文を読む <ChevronRight size={20} />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="from-secondary/5 via-background to-primary/5 border-border/40 relative border-t bg-gradient-to-br px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8 lg:gap-12">
          {/* Left Column: Brand */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center space-y-3"
          >
            <div className="flex items-center gap-3">
              <h3 className="font-heading text-foreground text-lg font-bold">
                ITxDANCER
              </h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              元プロA級ダンサーが教える、オンライン社交ダンスセミナー・プライベートレッスン・体幹トレーニング。
              運動学と機能解剖学に基づいた理論的な指導で、ポスチャーや動きを骨格レベルから改善。
              初心者から競技者まで、自宅から本格的に社交ダンスを学べます。
            </p>
          </motion.div>

          {/* Center Column: Links by Category */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            {/* Learn */}
            <div className="space-y-3">
              <div className="text-primary flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                <span className="font-heading text-sm font-bold">Learn</span>
              </div>
              <div className="flex flex-col gap-2 pl-7">
                <a
                  href="/guide"
                  data-testid="link-footer-guide"
                  className="text-muted-foreground hover:text-primary w-fit text-sm transition-colors"
                >
                  Getting Started
                </a>
                <a
                  href="/faq"
                  data-testid="link-footer-faq"
                  className="text-muted-foreground hover:text-primary w-fit text-sm transition-colors"
                >
                  FAQ
                </a>
              </div>
            </div>

            {/* Community */}
            <div className="space-y-3">
              <div className="text-primary flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span className="font-heading text-sm font-bold">
                  Community
                </span>
              </div>
              <div className="flex flex-col gap-2 pl-7">
                <a
                  href="/contact"
                  data-testid="link-footer-contact"
                  className="text-muted-foreground hover:text-primary w-fit text-sm transition-colors"
                >
                  Contact Us
                </a>
                <a
                  href="/about"
                  data-testid="link-footer-about-community"
                  className="text-muted-foreground hover:text-primary w-fit text-sm transition-colors"
                >
                  About Us
                </a>
              </div>
            </div>

            {/* Legal */}
            <div className="space-y-3">
              <div className="text-primary flex items-center gap-2">
                <Lock className="h-5 w-5" />
                <span className="font-heading text-sm font-bold">Legal</span>
              </div>
              <div className="flex flex-col gap-2 pl-7">
                <a
                  href="/privacy"
                  data-testid="link-footer-privacy"
                  className="text-muted-foreground hover:text-primary w-fit text-sm transition-colors"
                >
                  Privacy Policy
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col justify-center space-y-4"
          >
            <div className="space-y-2">
              <h4 className="font-heading text-foreground font-bold">
                Join Our Community
              </h4>
              <p className="text-muted-foreground text-sm">
                Connect with thousands of zen-seekers on your mindfulness
                journey.
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <a
                href="https://line.me/R/ti/p/@your_id"
                className="flex items-center justify-center w-full bg-[#06C755] text-white px-4 py-2 rounded-full shadow-lg hover:shadow-xl hover:brightness-105 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <div className="flex flex-col items-center leading-none -space-y-0.5">
                  <span className="text-base font-bold tracking-tighter w-fit text-center flex items-center gap-1">
                    LINE ▶
                  </span>
                  <span className="text-base font-bold tracking-tight">
                    ここから参加
                  </span>
                </div>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-border/40 my-8 border-t" />

        {/* Bottom: Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-muted-foreground/60 flex flex-col items-center justify-between gap-4 text-center text-xs md:flex-row"
        >
          <p>
            &copy; {new Date().getFullYear()} Fauzira Alpiandi. All rights
            reserved.
          </p>
          <p className="flex items-center justify-center gap-1">
            Built with <Heart className="h-3 w-3 text-red-400" /> for cat lovers
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default function Home({ posts = [] }: { posts?: Post[] }) {
  return (
    <>
      <Hero />
      <Features posts={posts} />
      <Community />
      <section id="cta" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 space-y-4 text-center"
          >
            <span className="font-hand text-primary text-xl">
              大埜健が直接指導する
            </span>
            <h2 className="font-heading text-foreground text-4xl font-bold md:text-5xl">
              オンライン プライベートレッスン
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                id: 'cta-start-app',
                title: 'プライベートレッスン',
                description:
                  'あなたのためだけの時間。\n社交ダンスのオンラインレッスンはもちろん、デモや試合のビデオから改善点を見つける、トレーニング、練習、質問など自由にお使えます。',
                href: '/app',
                testId: 'button-cta-app',
                icon: <User className="text-primary h-8 w-8" />,
              },
              {
                id: 'cta-guide',
                title: '悩みや弱点を集中特訓',
                description:
                  '苦手なステップを集中的に練習するのも良し。正しいテクニックを学ぶこと、そして繰り返し練習することが大切です。先生の目がある中で、繰り返し練習できます。',
                href: '/guide',
                testId: 'button-cta-guide',
                icon: <Target className="text-primary h-8 w-8" />,
              },
              {
                id: 'cta-explore',
                title: '25分 2500円',
                description:
                  '好きな場所から参加できます。\nスマホやタブレット、PCがあればOK、移動時間の無駄をなくして、時間を有効活用できます。',
                href: '/explore',
                testId: 'button-cta-explore',
                icon: <Coins className="text-primary h-8 w-8" />,
              },
            ].map((cta, idx) => (
              <motion.div
                key={cta.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileHover={{ y: -8 }}
                className="bg-card flex h-full flex-col items-center gap-4 rounded-[2rem] p-8 text-center shadow-lg transition-shadow hover:shadow-xl"
              >
                <div className="bg-primary/15 flex h-16 w-16 items-center justify-center rounded-full">
                  {cta.icon}
                </div>
                <h3 className="font-heading text-foreground text-2xl font-bold">
                  {cta.title}
                </h3>
                <p className="text-muted-foreground flex-1 whitespace-pre-line">
                  {cta.description}
                </p>
                <a href={cta.href}>
                  <button
                    data-testid={cta.testId}
                    className="bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer rounded-full px-6 py-2 text-sm font-bold shadow-md transition-colors"
                  >
                    Get Started
                  </button>
                </a>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 flex justify-end">
            <a
              href="/online-ballroomdance-lesson/"
              className="font-heading text-primary hover:text-primary/80 font-bold flex items-center gap-1 transition-colors group"
            >
              詳細へ
              <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>
      <QuoteSection />
    </>
  );
}
