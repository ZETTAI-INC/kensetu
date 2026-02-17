import { SubpageHero } from '@/components/SubpageHero';
import { Mail, Phone } from 'lucide-react';

export default function PrivacyPage() {
    return (
        <main>
            <SubpageHero
                titleEn="PRIVACY POLICY"
                titleJa="個人情報保護方針"
                backgroundImage="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
            />

            <div className="container mx-auto px-6 py-24">
                <div className="max-w-3xl mx-auto bg-white p-8 md:p-16 rounded-2xl shadow-sm border border-blue-100">
                    <div className="prose prose-blue max-w-none prose-headings:font-bold prose-h3:text-lg prose-h3:mt-8 prose-h3:mb-4 prose-p:leading-relaxed prose-p:text-blue-800/70">
                        <p className="text-[#1E3A5F] font-medium">
                            当社は、お客様の個人情報を適切に保護することを重要な責務と考え、以下の方針に基づき個人情報の保護に努めます。
                        </p>

                        <h3 className="flex items-center gap-3 text-[#1E3A5F] border-b border-blue-100 pb-2">
                            <span className="text-blue-500 font-bold">01</span>
                            個人情報の収集について
                        </h3>
                        <p>
                            当社は、適法かつ公正な手段によって個人情報を収集いたします。
                        </p>

                        <h3 className="flex items-center gap-3 text-[#1E3A5F] border-b border-blue-100 pb-2">
                            <span className="text-blue-500 font-bold">02</span>
                            個人情報の利用目的
                        </h3>
                        <p>
                            収集した個人情報は、以下の目的で利用いたします。
                        </p>
                        <ul className="list-disc pl-5 space-y-2 text-blue-800/70">
                            <li>お客様へのサービス提供</li>
                            <li>お問い合わせへの対応</li>
                            <li>サービス改善のための分析</li>
                        </ul>

                        <h3 className="flex items-center gap-3 text-[#1E3A5F] border-b border-blue-100 pb-2">
                            <span className="text-blue-500 font-bold">03</span>
                            個人情報の第三者提供
                        </h3>
                        <p>
                            当社は、法令に基づく場合を除き、お客様の同意なく個人情報を第三者に提供することはありません。
                        </p>

                        <h3 className="flex items-center gap-3 text-[#1E3A5F] border-b border-blue-100 pb-2">
                            <span className="text-blue-500 font-bold">04</span>
                            個人情報の管理
                        </h3>
                        <p>
                            当社は、個人情報の漏洩、滅失、毀損等を防止するため、適切な安全管理措置を講じます。
                        </p>

                        <h3 className="flex items-center gap-3 text-[#1E3A5F] border-b border-blue-100 pb-2">
                            <span className="text-blue-500 font-bold">05</span>
                            お問い合わせ
                        </h3>
                        <p>
                            個人情報の取り扱いに関するお問い合わせは、当社までご連絡ください。
                        </p>
                        <div className="bg-[#EFF6FF] p-6 rounded-lg mt-4 not-prose">
                            <p className="font-bold text-[#1E3A5F] mb-3">株式会社リッチ＆ビルド</p>
                            <div className="space-y-2 text-sm text-blue-800/70">
                                <div className="flex items-center gap-2">
                                    <Mail className="w-4 h-4 text-blue-500" />
                                    <span className="font-medium">メール：</span>
                                    <a href="mailto:takeshi.arai625@gmail.com" className="hover:text-blue-600 hover:underline transition-colors">
                                        takeshi.arai625@gmail.com
                                    </a>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Phone className="w-4 h-4 text-blue-500" />
                                    <span className="font-medium">電話：</span>
                                    <a href="tel:090-7797-6699" className="hover:text-blue-600 hover:underline transition-colors">
                                        090-7797-6699
                                    </a>
                                </div>
                                <p className="pl-6">担当：荒井 武志</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 pt-8 border-t border-blue-100 text-right">
                        <p className="text-sm text-blue-600/70">
                            制定日：{new Date().getFullYear()}年1月1日<br />
                            株式会社リッチ＆ビルド<br />
                            代表取締役 荒井 武志
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
