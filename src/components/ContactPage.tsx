import { useState } from 'react';
import { ArrowLeft, Mail, Heart } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email && message) {
      try {
        const response = await fetch('https://formsubmit.co/ajax/ken@itxdancer.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            name,
            email,
            message,
            _subject: 'ITxDANCER お問い合わせ',
          }),
        });

        if (response.ok) {
          setSubmitted(true);
          setName('');
          setEmail('');
          setMessage('');
        } else {
          alert('送信に失敗しました。お手数ですが、後ほどやり直してください。');
        }
      } catch (error) {
        alert('エラーが発生しました。インターネット接続を確認してください。');
      }
    }
  };

  return (
    <div className="from-primary/5 via-background to-secondary/5 min-h-screen bg-gradient-to-br p-6">
      <div className="mx-auto max-w-2xl">
        <div className="mb-8 anim-fade-down">
          <a href="/">
            <button
              data-testid="button-back-contact"
              className="hover:bg-secondary/20 mb-4 rounded-full p-2 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
          </a>
        </div>

        <div className="space-y-8 anim-fade-up anim-delay-100">
          <div className="space-y-4 text-center">
            <Mail className="text-primary mx-auto h-12 w-12" />
            <h1 className="font-heading text-foreground text-4xl font-bold md:text-5xl">お問い合わせ</h1>
            <p className="text-muted-foreground text-lg">ご質問やフィードバックなど、お気軽にお問い合わせください。</p>
          </div>

          <div className="bg-card rounded-[2rem] border-none shadow-lg">
            <div className="p-8 md:p-12">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-foreground text-sm font-bold">お名前</label>
                    <input type="text" placeholder="お名前" value={name} onChange={(e) => setName(e.target.value)} data-testid="input-contact-name" className="border-border bg-background focus:border-primary w-full rounded-lg border-2 px-4 py-3 transition-colors focus:outline-none" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-foreground text-sm font-bold">メールアドレス</label>
                    <input type="email" placeholder="your@email.com" value={email} onChange={(e) => setEmail(e.target.value)} data-testid="input-contact-email" className="border-border bg-background focus:border-primary w-full rounded-lg border-2 px-4 py-3 transition-colors focus:outline-none" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-foreground text-sm font-bold">メッセージ</label>
                    <textarea placeholder="メッセージ内容..." value={message} onChange={(e) => setMessage(e.target.value)} data-testid="textarea-contact-message" rows={5} className="border-border bg-background focus:border-primary w-full resize-none rounded-lg border-2 px-4 py-3 transition-colors focus:outline-none" required />
                  </div>
                  <button data-testid="button-contact-submit" type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 active:scale-95 w-full rounded-lg py-3 font-bold transition-transform">
                    送信する
                  </button>
                </form>
              ) : (
                <div className="space-y-4 text-center anim-fade-in">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                    <Heart className="h-8 w-8 fill-current text-green-600" />
                  </div>
                  <h2 className="font-heading text-foreground text-2xl font-bold">送信完了</h2>
                  <p className="text-muted-foreground">メッセージを送信しました。24時間以内に折り返しご連絡いたします。</p>
                  <button onClick={() => setSubmitted(false)} className="border-primary text-primary hover:bg-primary/10 hover:scale-105 active:scale-95 mt-4 rounded-lg border-2 px-6 py-2 font-bold transition-all">
                    別のメッセージを送る
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="text-center">
            <a href="/">
              <button data-testid="button-back-home-contact" className="border-primary text-primary hover:bg-primary/10 rounded-full border-2 px-8 py-2 font-bold transition-colors">
                ホームへ戻る
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
