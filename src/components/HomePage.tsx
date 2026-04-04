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
  Search,
  ExternalLink,
  MoveRight,
  ChevronLeft,
  ChevronRight,
  Activity,
  PlayCircle,
  User,
  Target,
  Coins,
  Lightbulb,
  MessageCircle,
  Gift,
  HelpCircle,
  Monitor,
  Trophy,
} from 'lucide-react';
import { useState, useEffect } from 'react';

const Hero = ({ posts = [], nextPostId = '', totalCount = 0 }: { posts?: Post[]; nextPostId?: string; totalCount?: number }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const hasMore = nextPostId !== '';

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      const next = prev + 3;
      return next >= posts.length ? prev : next;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      const next = prev - 3;
      return next < 0 ? 0 : next;
    });
  };

  const visiblePosts = posts.slice(currentIndex, currentIndex + 3);
  const isLastPage = currentIndex + 3 >= posts.length;

  return (
    <section id="home">
      {/* Hero First View with Background Video */}
      <div className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-6 py-12 md:px-12 lg:px-24">
        {/* Background Video - 修正済み: onLoadedDataを追加 */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover z-0"
          poster="/images/hero-poster.webp"
          onLoadedData={(e) => {
            e.currentTarget.muted = true;
            e.currentTarget.play();
          }}
        >
          <source src="/videos/dance-logic.webm" type="video/webm" />
          <source src="/videos/dance-logic.mp4" type="video/mp4" />
        </video>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/55 z-[1]" />

        {/* Centered Heading */}
        <motion.div
          className="relative z-10 mb-12 space-y-4 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-hand text-primary text-xl md:text-2xl" style={{textShadow: '0 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.6)'}}>
            誰でも無料で参加できる
          </span>
          <h2 className="font-heading text-white text-4xl font-bold md:text-6xl drop-shadow-lg">
            オンライン社交ダンスセミナー
          </h2>
        </motion.div>

        <div className="relative z-10 flex w-full max-w-3xl flex-col items-center text-center mb-24">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="font-hand text-primary mb-4 inline-block text-2xl xl:text-3xl" style={{textShadow: '0 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.6)'}}>
              その一歩に、確かな「理由」を
            </span>
            <h1 className="font-heading text-white mb-6 text-4xl leading-[1.2] font-bold md:text-5xl lg:text-6xl tracking-tight drop-shadow-lg">
              なんとなくの感覚踊りから
              <br />
              <span className="text-white mt-2 block">
                卒業しませんか？
              </span>
            </h1>
            <p className="text-white/85 mx-auto w-full max-w-2xl text-base leading-relaxed md:text-lg drop-shadow">
              <span className="text-primary font-bold" style={{textShadow: '0 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.6)'}}>根拠があるから、迷わない</span><br />
              <br />
              社交ダンスの「テクニック・理論・身体の仕組み」を正しく理解するチャンス
            </p>

            {/* Trust Badges */}
            <motion.div
              className="flex flex-wrap justify-center gap-4 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {[
                { icon: Star, label: 'A級プロが講師', color: 'text-yellow-400' },
                { icon: Lock, label: 'セミナーは無料', color: 'text-green-400' },
                {
                  icon: CheckCircle,
                  label: '機能解備学',
                  color: 'text-purple-400',
                },
                { icon: Heart, label: '500回以上継続', color: 'text-red-400' },
              ].map((badge, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + idx * 0.1 }}
                  className="bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center gap-2 rounded-full px-3 py-2"
                >
                  <badge.icon
                    className={`h-4 w-4 flex-shrink-0 ${badge.color}`}
                  />
                  <span className="text-white text-xs font-semibold">
                    {badge.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Seminar Slider integrated into Hero */}
      <div id="latest-seminars" className="relative z-10 w-full max-w-7xl mx-auto px-4 mt-12 pb-12">
        <div className="relative">
          {posts.length > 3 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-[-20px] md:left-[-50px] top-1/2 -translate-y-1/2 bg-card text-primary hover:bg-primary hover:text-white p-2 md:p-3 rounded-full shadow-md transition-colors z-20"
                aria-label="Previous posts"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-[-20px] md:right-[-50px] top-1/2 -translate-y-1/2 bg-card text-primary hover:bg-primary hover:text-white p-2 md:p-3 rounded-full shadow-md transition-colors z-20"
                aria-label="Next posts"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {posts.length > 0 ? (
              <>
                {visiblePosts.map((post, idx) => (
                  <a href={`/${post.id}`} key={post.id} className="block w-full">
                    <FeatureCard
                      title={post.title}
                      desc={(post.description || '').substring(0, 100) + ((post.description && post.description.length > 100) ? '...' : '')}
                      img={post.heroImage || '/images/meditating_cat_illustration.png'}
                      delay={0.1 * (idx + 1)}
                      testId={`card-feature-${idx}`}
                    />
                  </a>
                ))}
                {isLastPage && hasMore && (
                  <a
                    href={`/blog/#post-${nextPostId}`}
                    className="bg-card rounded-[2rem] p-8 shadow-sm border border-border hover:shadow-md transition-all flex flex-col items-center justify-center gap-3 text-center group"
                  >
                    <ExternalLink className="text-primary h-8 w-8 group-hover:scale-110 transition-transform" />
                    <span className="font-heading text-lg font-bold text-foreground">過去のセミナーをもっと見る</span>
                  </a>
                )}
              </>
            ) : (
              // Fallback cards
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

      {/* BEGIN: Why Free & What You Gain Section */}
      <div className="relative z-10 w-full max-w-7xl mx-auto mt-24 px-4 space-y-20">

        {/* Section 1: セミナーで得られること */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-12 space-y-4 text-center">
            <span className="font-hand text-primary text-xl">
              参加するメリット
            </span>
            <h2 className="font-heading text-foreground text-3xl font-bold md:text-4xl">
              セミナーで得られること
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                icon: <HelpCircle className="text-primary h-7 w-7" />,
                title: 'テクニックの「なぜ？」が解ける',
                body: 'ステップやホールドの形。その「理由」を身体の仕組みから理解できます。',
              },
              {
                icon: <Monitor className="text-primary h-7 w-7" />,
                title: 'オンラインだからこそ「見える」細部',
                body: '対面では聞き逃しがちな理論も、自宅なら集中して吸収・反復できます。カメラは前後ろ上と３方向にあり、録画もあります。自身のカメラをオンにすれば自分の映像と見比べることも可能です。',
              },
              {
                icon: <Trophy className="text-primary h-7 w-7" />,
                title: '「できる」自信を持ってフロアへ',
                body: '知識と部分練習を蓄えることで、次にフロアへ行くときの踊りが見違えます。',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-card rounded-[2rem] p-8 shadow-lg hover:shadow-xl transition-all h-full flex flex-col"
              >
                <div className="bg-primary/15 flex h-14 w-14 items-center justify-center rounded-full mb-5 shrink-0">
                  {item.icon}
                </div>
                <h3 className="font-heading text-foreground text-lg font-bold mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed flex-1">
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Section 2: 無料で提供する理由 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-12 space-y-4 text-center">
            <span className="font-hand text-primary text-xl">
              無料のわけ
            </span>
            <h2 className="font-heading text-foreground text-3xl font-bold md:text-4xl leading-tight">
              オンライン社交ダンスセミナーを<br className="hidden md:block" />無料で提供する理由
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                icon: <Lightbulb className="text-primary h-7 w-7" />,
                title: '「感覚」を「理論」へ。\n迷いを払拭する、学びの場を',
                body: '社交ダンスは感覚的な教えが多く、複数の要素が絡み合い迷いが生じがちです。体系立てた理論を共有することで、誰もが迷わず上達できる環境を目指しています。',
              },
              {
                icon: <MessageCircle className="text-primary h-7 w-7" />,
                title: '効率的な\n「学びの使い分け」の提案',
                body: '教室や練習場は思い切り動く場、オンラインは集中して知識を深め、部分練習をする場。正しく理解して繰り返し練習することが、理想のダンスへの最短距離だと信じています。',
              },
              {
                icon: <Gift className="text-primary h-7 w-7" />,
                title: '私なりの、\nダンス界への恩返し',
                body: '私自身、中途半端に色々な理論をかじり遠回りし、苦労した経験があります。かつての自分と同じ悩みを持つ方の力になりたい。無料、そして参加しやすいオンラインで門戸を広げ、業界を盛り上げることが私の願いです。',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-card rounded-[2rem] p-8 shadow-lg hover:shadow-xl transition-all h-full flex flex-col"
              >
                <div className="bg-primary/15 flex h-14 w-14 items-center justify-center rounded-full mb-5 shrink-0">
                  {item.icon}
                </div>
                <h3 className="font-heading text-foreground text-lg font-bold mb-3 whitespace-pre-line leading-snug">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed flex-1">
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      {/* END: Why Free & What You Gain Section */}

      {/* BEGIN: Seminar CTA Section */}
      <motion.section 
        className="relative z-10 w-full max-w-5xl mx-auto mt-16" 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        id="cta-section"
      >
        {/* Main White Card */}
        <div className="bg-white rounded-[40px] shadow-2xl shadow-primary/5 p-8 md:p-12 border border-border/50 flex flex-col items-center text-center">
          {/* Icons Row */}
          <div className="flex items-center gap-6 mb-10">
            {/* Zoom Icon */}
            <div className="flex items-center gap-2">
              <img src="/images/zoom-logo.jpg" alt="Zoom" className="h-8 w-auto object-contain" />
            </div>
            <div className="h-8 w-[1px] bg-border"></div>
            {/* YouTube Icon */}
            <div className="flex items-center gap-2">
              <img src="/images/youtube-logo.jpg" alt="YouTube" className="h-8 w-auto object-contain" />
            </div>
          </div>

          {/* Text Content */}
          <div className="mb-10 max-w-2xl">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-6 font-heading tracking-tight leading-tight">
              オンライン社交ダンスセミナー
            </h2>
            <p className="text-muted-foreground text-base md:text-xl leading-relaxed">
              <span className="font-bold text-[#06C755]">【無料】</span>LINE登録で、セミナー開始直前にZoom IDをお届けします。<br className="hidden md:block"/>
              過去のアーカイブ動画（YouTube）もすべて視聴可能です。
            </p>
          </div>

          {/* CTA Button */}
          <div className="w-full max-w-md">
            <a 
              className="bg-[#06C755] hover:bg-[#05b14c] transition-all duration-300 rounded-full py-5 px-8 flex items-center justify-between group shadow-xl shadow-green-500/20 hover:scale-[1.02]" 
              href="https://lin.ee/tviDWfg"
            >
              <span className="flex-grow text-center text-white font-bold text-lg md:text-2xl ml-6 font-heading">
                LINE登録して無料で参加する
              </span>
              <ChevronRight className="w-6 h-6 text-white transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </motion.section>
      {/* END: Seminar CTA Section */}
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
    <div className="bg-card h-full rounded-[2rem] border-none shadow-lg transition-shadow duration-300 hover:shadow-xl">
      <div className="flex h-full flex-col items-center p-8 text-center">
        <motion.img
          src={img}
          alt={title}
          className="mb-8 h-48 w-auto object-contain drop-shadow-md"
          whileHover={{ scale: 1.05 }}
        />
        <h3 className="font-heading text-foreground mb-3 text-2xl font-bold">
          {title}
        </h3>
        <p className="text-muted-foreground flex-1 leading-relaxed">{desc}</p>
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

const Community = () => {
  const testimonials = [
    {
      name: '社交ダンスに必要な',
      role: '体幹トレーニングに特化',
      quote:
        '社交ダンスに不可欠な体幹を鍛えつつ、身体を自在に操るための神経系のアプローチと柔軟性の向上を図ります。トレーニングはダンスの動きやポスチャーと関連させながら行い、ダンスに活かせるようにします。',
      icon: <Activity className="text-primary h-8 w-8" />,
      link: '/body-training/#社交ダンスに必要な体幹を鍛える',
    },
    {
      name: '録画も見られる',
      role: 'Youtube 限定動画',
      quote:
        '全てのレッスンは録画され、限定公開動画として何度も復習可能です。リアルタイムで参加できない日も、後から自分の好きなタイミングで練習できます.',
      icon: <PlayCircle className="text-primary h-8 w-8" />,
      link: '/body-training/#録画も見られる-youtube限定動画',
    },
    {
      name: '25分 1,000円',
      role: '最大4人まで',
      quote:
        '少人数制のクラスなので、一人ひとりの動きをしっかりとチェック。低価格ながらも、パーソナルに近いきめ細やかなアドバイスが受けられます。',
      icon: <Coins className="text-primary h-8 w-8" />,
      link: '/body-training/#料金',
    },
  ];

  return (
    <section id="body-training" className="relative px-6 py-24 md:px-12 lg:px-24 bg-slate-50/80">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 space-y-4 text-center">
          <span className="font-hand text-primary text-xl">
            社交ダンスに特化
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
              whileHover={{ y: -10 }}
            >
              <a href={person.link} className="block h-full transition-transform duration-300">
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
              </a>
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
      id="ken-ono"
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
              元JBDFプロA級大埜健が教える、オンライン社交ダンスセミナー・プライベートレッスン・体幹トレーニング。
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
            {/* Services */}
            <div className="space-y-3">
              <div className="text-primary flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                <span className="font-heading text-sm font-bold">サービス</span>
              </div>
              <div className="flex flex-col gap-2 pl-7">
                <a
                  href="/#features"
                  className="text-muted-foreground hover:text-primary w-fit text-sm transition-colors"
                >
                  オンライン社交ダンスセミナー
                </a>
                <a
                  href="/body-training/"
                  className="text-muted-foreground hover:text-primary w-fit text-sm transition-colors"
                >
                  オンライン体幹トレーニング
                </a>
                <a
                  href="/online-ballroomdance-lesson/"
                  className="text-muted-foreground hover:text-primary w-fit text-sm transition-colors"
                >
                  オンラインプライベートレッスン
                </a>
              </div>
            </div>

            {/* Contents */}
            <div className="space-y-3">
              <div className="text-primary flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span className="font-heading text-sm font-bold">
                  コンテンツ
                </span>
              </div>
              <div className="flex flex-col gap-2 pl-7">
                <a
                  href="/blog/"
                  className="text-muted-foreground hover:text-primary w-fit text-sm transition-colors"
                >
                  新着一覧
                </a>
                <a
                  href="/ken-ono/"
                   className="text-muted-foreground hover:text-primary w-fit text-sm transition-colors"
                >
                  講師 大埜健について
                </a>
                <a
                  href="/sitemap/"
                   className="text-muted-foreground hover:text-primary w-fit text-sm transition-colors"
                >
                  サイトマップ
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
                お問い合わせ＆セミナーへ参加
              </h4>
              <p className="text-muted-foreground text-sm">
                LINE公式アカウントに登録いただくと無料でセミナーへの参加、過去動画の閲覧ができます。<br />
                お問い合わせは、LINEもしくは<a href="mailto:narutaku@yahoo.co.jp" className="hover:text-primary underline">メール</a>にてご連絡ください。
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <a
                href="https://lin.ee/tviDWfg"
                className="flex items-center justify-center w-full bg-[#06C755] text-white px-4 py-2 rounded-full shadow-lg hover:shadow-xl hover:brightness-105 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <div className="flex flex-col items-center leading-none -space-y-0.5">
                  <span className="text-base font-bold tracking-tighter w-fit text-center flex items-center gap-1">
                    ▶ LINE登録
                  </span>
                  <span className="text-sm font-bold tracking-tight">
                    セミナー参加と録画視聴はこちら
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
            &copy; {new Date().getFullYear()} ITxDANCER <a href="/ken-ono/" className="hover:text-primary transition-colors">大埜健</a>.All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default function Home({ posts = [], nextPostId = '', totalCount = 0 }: { posts?: Post[]; nextPostId?: string; totalCount?: number }) {
  return (
    <>
      <Hero posts={posts} nextPostId={nextPostId} totalCount={totalCount} />
      <Community />
      <section id="online-ballroomdance-lesson" className="px-6 py-24 bg-white relative">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 space-y-4 text-center"
          >
            <span className="font-hand text-primary text-xl">
              1対1のプライベートレッスン
            </span>
            <h2 className="font-heading text-foreground text-4xl font-bold md:text-5xl">
              オンライン 個人レッスン
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                id: 'cta-start-app',
                title: '個人レッスン',
                description:
                  'あなたのためだけの時間。\n社交ダンスのオンラインレッスンはもちろん、デモや試合のビデオから改善点を見つける、トレーニング、練習、質問など自由にお使えます。',
                href: '/online-ballroomdance-lesson/#プライベートのオンラインレッスンだから',
                testId: 'button-cta-app',
                icon: <User className="text-primary h-8 w-8" />,
              },
              {
                id: 'cta-guide',
                title: '悩みや弱点を集中特訓',
                description:
                  '苦手なステップを集中的に練習するのも良し。正しいテクニックを学ぶこと、そして繰り返し練習することが大切です。先生の目がある中で、繰り返し練習できます。',
                href: '/online-ballroomdance-lesson/#あなたのお悩みを解決するために',
                testId: 'button-cta-guide',
                icon: <Target className="text-primary h-8 w-8" />,
              },
              {
                id: 'cta-explore',
                title: '25分 2500円',
                description:
                  '好きな場所から参加できます。\nスマホやタブレット、PCがあればOK、移動時間の無駄をなくして、時間を有効活用できます。',
                href: '/online-ballroomdance-lesson/#料金',
                testId: 'button-cta-explore',
                icon: <Coins className="text-primary h-8 w-8" />,
              },
            ].map((cta, idx) => (
              <motion.a
                href={cta.href}
                key={cta.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileHover={{ y: -8 }}
                className="bg-card flex h-full flex-col items-center gap-4 rounded-[2rem] p-8 text-center shadow-lg transition-shadow hover:shadow-xl cursor-pointer group"
              >
                <div className="bg-primary/15 flex h-16 w-16 items-center justify-center rounded-full group-hover:scale-110 transition-transform">
                  {cta.icon}
                </div>
                <h3 className="font-heading text-foreground text-2xl font-bold group-hover:text-primary transition-colors">
                  {cta.title}
                </h3>
                <p className="text-muted-foreground flex-1 whitespace-pre-line">
                  {cta.description}
                </p>
              </motion.a>
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
