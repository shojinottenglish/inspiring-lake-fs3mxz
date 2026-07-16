import React, { useState } from "react";

const App = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [answers, setAnswers] = useState({
    q1_1_a: "",
    q1_1_b: "",
    q1_2: "",
    q1_3: "",
    q1_4: "",
    q1_5_1: "",
    q1_5_2: "",
    q1_6: "",
    q1_7: "",
    q2_1: "",
    q2_2: "",
    q2_3: "",
    q2_4: "",
    q2_5: "",
    q2_6: "",
    q2_7: "",
    q2_8_1: "",
    q2_8_2: "",
    q3_1: "",
  });

  const handleAnswerChange = (key, value) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };

  const handleCheckboxChange = (key1, key2, value) => {
    if (answers[key1] === value) {
      handleAnswerChange(key1, "");
    } else if (answers[key2] === value) {
      handleAnswerChange(key2, "");
    } else if (!answers[key1]) {
      handleAnswerChange(key1, value);
    } else if (!answers[key2]) {
      handleAnswerChange(key2, value);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-sans text-gray-800">
      {/* Header */}
      <header className="bg-red-800 text-white py-4 px-6 shadow-md flex justify-between items-center z-10">
        <h1 className="text-xl font-bold tracking-wider">
          2026年度 一般選抜 総合問題 (早稲田大学 政治経済学部)
        </h1>
        <div className="text-sm">制限時間: 120分</div>
      </header>

      <main className="flex-1 flex flex-col md:flex-row overflow-hidden">
        {/* Left Side: Question Content */}
        <div className="w-full md:w-2/3 lg:w-7/12 flex flex-col h-full bg-white border-r">
          {/* Tabs */}
          <div className="flex border-b bg-gray-100">
            {[1, 2, 3].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-3 text-center font-bold text-lg transition-colors
                  ${
                    activeTab === tab
                      ? "bg-white border-t-4 border-red-800 text-red-800"
                      : "text-gray-500 hover:bg-gray-200 hover:text-gray-700"
                  }
                `}
              >
                大問 {tab === 1 ? "I" : tab === 2 ? "II" : "III"}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="flex-1 overflow-y-auto p-6 md:p-10 leading-relaxed text-justify">
            {activeTab === 1 && <QuestionContentI />}
            {activeTab === 2 && <QuestionContentII />}
            {activeTab === 3 && <QuestionContentIII />}
          </div>
        </div>

        {/* Right Side: Answer Sheet */}
        <div className="w-full md:w-1/3 lg:w-5/12 flex flex-col h-full bg-gray-50">
          <div className="bg-gray-200 py-3 text-center font-bold text-gray-700 border-b shadow-sm">
            解答用紙 - 大問{" "}
            {activeTab === 1 ? "I" : activeTab === 2 ? "II" : "III"}
          </div>
          <div className="flex-1 overflow-y-auto p-6">
            {activeTab === 1 && (
              <AnswerFormI
                answers={answers}
                onChange={handleAnswerChange}
                onCheck={handleCheckboxChange}
              />
            )}
            {activeTab === 2 && (
              <AnswerFormII
                answers={answers}
                onChange={handleAnswerChange}
                onCheck={handleCheckboxChange}
              />
            )}
            {activeTab === 3 && (
              <AnswerFormIII answers={answers} onChange={handleAnswerChange} />
            )}

            <div className="mt-8 pt-6 border-t text-center">
              <button
                onClick={() =>
                  alert(
                    "提出機能はモックです。コンソールに回答データを出力しました。\n\n" +
                      JSON.stringify(answers, null, 2)
                  )
                }
                className="bg-red-800 hover:bg-red-700 text-white font-bold py-3 px-8 rounded shadow-lg transition-transform transform hover:scale-105"
              >
                答案を提出する
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

// ==========================================
// Question Contents
// ==========================================

const QuestionContentI = () => (
  <div className="space-y-6">
    <div className="text-xl font-bold border-b-2 border-black pb-2 mb-4">
      I. 問題文A・Bを読んで、下記の問い1~7に答えよ。(45点)
    </div>

    <h3 className="font-bold text-lg bg-gray-100 p-2 border-l-4 border-gray-600">
      問題文 A
    </h3>
    <div className="space-y-4">
      <p>
        貿易と気候変動を巡る一つの争点は、国境炭素調整(Border Carbon Adjustment:
        BCA)である。第2章で述べたように、気候変動対策を巡る国際協調が揺らぐ一方で、一部の国は自国の排出削減政策を強化しており、国家間で政策強度の差が広がっている。特に、近年、排出量取引や炭素税といった「カーボンプライシング」と呼ばれる政策を採用し、炭素排出に対して政策的にコストを乗せている国が増えており、こうした国々では、カーボンプライシングによって、企業のエネルギーコストが増えて、エネルギーを大量に使用する製造業の
        <span className="inline-block border-b border-black w-16 mx-1"></span>
        に影響が及ぶことが懸念されている。
      </p>
      <p>
        カーボンプライシングを課せられている自国製品が、課せられていない他国製品よりも不利になれば、自国での生産が減り、他国での生産が増え、それにともない炭素排出も他国に流出する。この現象は「カーボンリーケージ(炭素漏出)」と呼ばれており、
        <span className="border border-black px-2 mx-1 font-bold">①</span>
        。これでは、本末転倒である。
        <br />
        こうした事態を防ぐために、経済学の一分野である環境経済学では、輸入品に自国と同等の炭素コストを課し、
        <span className="underline decoration-1 underline-offset-4 font-semibold">
          輸出品に国内で課した炭素コスト相当額を還付するBCAの仕組みが長年、研究されてきた。
        </span>
        <sup className="font-bold">(1)</sup>
        BCAを行うことで、国内市場では、国産品と輸入品の両方に同等の炭素コストが課せられ、海外には、炭素コストが乗らない形で自国製品が輸出されるようになる。これが実現すれば、他国へのカーボンリーケージを懸念することなく、自国のカーボンプライシングを強化できる。さらには、他国に対しても、輸出先でカーボンプライシングを徴収されるくらいなら、自国でカーボンプライシングを導入しようとの誘因が働く。つまり、世界全体で対策を進めるきっかけにもなる。
      </p>
      <p>
        ところが、実際には、BCAを導入する国はなかなか現れなかった。炭素排出に応じて輸入課税や輸出還付を行うことが世界貿易機関
        (World Trade Organization: WTO)
        の自由貿易のルールに反するおそれがあることや、輸入課税を課せられた国が課した国の重要な産品に対抗関税を課すという報復合戦のリスクがあるためである。
      </p>
      <p>
        2022年12月、
        <span className="underline decoration-1 underline-offset-4 font-semibold">
          EUはこれらのリスクを振り切って、BCAの導入を決定
        </span>
        <sup className="font-bold">(2)</sup>
        した。EUはその制度のことを「炭素国境調整メカニズム」 (Carbon Border
        Adjustment Mechanism: CBAM)と呼んでいる。BCAのEU版がCBAMである。
      </p>
      <p>
        CBAMは、EUのカーボンプライシング政策である排出量取引制度(EU Emissions
        Trading System: EUETS) を
        2026年以降に強化するのにあわせて導入される。EUETSは、電力、鉄鋼、化学、セメントなどエネルギー消費量が大きい業種を対象とし、企業に自社工場の排出量と同量の「排出枠」を一定期日までに納付する義務を課す制度である。政府は排出枠を発行し、企業は政府による有償オークションを通じて排出枠を調達する。ただし、鉄鋼、化学、セメントといった排出量が大きく、輸出入で国際競争に晒されている業種については、企業に対して、一定量の排出枠を無償で割り当てる。政府による有償オークションや民間企業間の市場での売買によって排出枠の価格が形成され、対象企業が負担する炭素コストとなる。
      </p>
      <div className="text-center text-gray-500">(中略)</div>
      <p>
        2020年代に入ると、気候変動対策と貿易の接点が拡大し、国家間で軋轢が生じるようになった。この事象は、根本的には
        <span className="underline decoration-1 underline-offset-4 font-semibold">
          「気候変動対策と自由貿易は両立するのか」
        </span>
        <sup className="font-bold">(3)</sup>
        との問いに帰着し、長い間、学術的にも実務的にも議論が続いてきた。
      </p>
      <p>
        「底辺への競争」と「頂上への収斂」は、その議論のなかでよく用いられてきた概念である。「底辺への競争」とは、輸出入の
        <span className="inline-block border-b border-black w-16 mx-1"></span>
        を高めるために、各国が競い合って気候変動対策、特に排出規制を緩めてしまう状況を指す。規制は製造業の生産コストを高めることから、その強度を弱めることで産業活動のコストが安くなり、自国製品の
        <span className="inline-block border-b border-black w-16 mx-1"></span>
        が高まる。そのため、自国が規制を強化するなかで他国が緩めると、競争で一方的に不利になることから、各国には規制を弱める誘因が働きやすいとされる。このケースでは、自由貿易の促進が気候変動対策を弱める方向に作用する。
        <br />
        これに対して、「頂上への収斂」は、ある国が規制を強化すると、その国に製品を輸出している国も規制を強化する状況を指す。輸出先の規制に合わせて製品を設計し製造するので、同じものが自国でも供給可能となって、輸出国の政府が規制を強化しやすくなるためである。このケースでは、自由貿易の促進を通じて気候変動対策が強化される。特に市場規模が大きい国が規制を強化する場合には、他国への波及影響が強まって、この力学が働きやすくなると言われている。
      </p>
      <p>
        これらの議論は、主として「規制政策」を対象とするものであるが、気候変動対策のなかには、IRA
        のような「政府支援」もある。各国政府は脱炭素の産業支援を競い合っており、この状況が気候変動対策を推進する観点からは、頂上への競争と評価されることがある一方、その競争が自由貿易を歪める悪影響を懸念して、「保護主義の連鎖」と見なされることもある。もちろん、政府支援を内外無差別に設計することは可能ではある。しかし、外国企業が政府支援から大きく受益することになれば、自国の納税者の支持を失いかねない。そのため、各国が内外無差別の支援を競い合う頂上への収斂よりも、支援を早々に手じまいする底辺への競争か、自国企業に有利な仕組みに改める保護主義の連鎖に陥りやすいと考えられる。
        <br />
        規制政策にせよ、政府支援にせよ、底辺への競争に陥って気候変動対策を強化できない場合、各国は底辺に留まり続けるか、気候変動対策を強化しつつ、それによる不利を緩和するために自由貿易を制限するかのどちらかを選ぶことになる。後者の場合、WTOのルールに反する貿易制限であれば、保護主義への陥落となるが、ルールに整合的な範囲での制限であれば、その国は底辺への競争を脱し、制度上は、気候変動対策と自由貿易を両立させていると見なせる。そして、二つを両立させている国の対策に他国が政策を合わせれば、頂上への収斂となる。
      </p>
      <p>
        底辺への競争と頂上への収斂は両極で、その中間に様々なバリエーションがある。望まれるのは、現状から頂上への収斂に少しでも近づけることである。
      </p>
      <div className="text-sm text-gray-600 border-t pt-2 mt-4">
        (出典: 上野貴弘『グリーン戦争』 中公新書,
        2024年。問題作成の都合で、一部省略したところがある。)
        <br />
        注1: IRAとは、米国のインフレ抑制法 (Inflation Reduction
        Act)。再生可能エネルギーや電気自動車(EV)
        などの脱炭素技術の導入を減税で後押しする政策。
      </div>
    </div>

    <h3 className="font-bold text-lg bg-gray-100 p-2 border-l-4 border-gray-600 mt-8">
      問題文 B
    </h3>
    <div className="space-y-4">
      <p>
        今
        国際的な気候変動政策で論争を呼んでいるのが、EUの炭素国境調整メカニズム
        (CBAM)
        の提案である。EUは欧州委員会が力をもち、気候変動政策を次々と打ち出している。2005年に開始した世界初の二酸化炭素の排出量取引制度,
        EUETS
        はその代表である。そして、その施策をさらに進めて、国境炭素調整を実施しようとしている。そうなれば、EUへ輸出する多くの企業が二酸化炭素排出量に応じて追加費用を支払うことになり、大きな痛手を被ることになる。たとえば、中国がEUへ鉄鋼を輸出できなくなれば、東南アジア市場に中国の鉄鋼が行くことになり、日本企業と市場をとりあうことになるかもしれない。
      </p>
      <p>
        この提案の背景には何があるのだろうか。EUは気候変動対策の国際的なリーダーとして、さまざまな取り組みをしてきた。さらに、世界に先駆け、2030年の削減目標を他国より厳しい
        55%に引き上げた。そのことにより、EUの産業界はさらなる負担を警戒し、これまでどおりの、EU単独での排出削減取り組みに限界を感じている。排出削減規制が厳しくなると、少なくとも短期的にはコスト負担が大きくなり、他地域への炭素リーケージ
        (漏洩)が起こる可能性が高くなる。EUでの経済活動が停滞し、海外に生産が移転し、EU外で排出が増えてしまうことが恐れられているのである。
      </p>
      <p>
        1997年の京都議定書以降,
        国際社会は世界全体で気候変動対策に取り組んできた。だが、ここに来て、EUは一方的な措置を使って、他国に排出削減を強制しようとしているように見える。これは、自由貿易の拡大と反する動きをしている最近の経済動向と連動している。
      </p>
      <p>
        国際社会は、第二次世界大戦後、戦争につながったと批判されるブロック経済化への反省から国際貿易の促進に取り組んできた。自由貿易促進のために、GATT
        (関税及び貿易に関する一般協定)が1947年に設立された。GATTのもとでは、貿易の制限を削減し、貿易上、特定の国を差別することをやめる方向に世界は向かっていった。関税を引き上げることは否定され、基本的に関税を引き下げることにより貿易上の制限をなくしていく方向で国際社会は動いていた。貿易の無差別待遇として、特定の国の産品を差別したり、自国製品を優遇したりすることを禁止する方向で世界は進んできた。GATTはさらに世界貿易機関
        (WTO)
        に発展した。世界は自由貿易を促進し、お互いに経済発展の果実を享受する方向で動いてきたのである。
      </p>
      <p>
        日本も高度成長期を通じて、この自由貿易の促進の恩恵を受けて、経済発展を遂げたといえるだろう。日本の自動車産業が国際競争力を得て、米国市場などで大きなシェアをもつようになったということは、まさにこのような背景があったから実現できたものであろう。
      </p>
      <p>
        しかし、このような自由貿易促進の流れのなかでも、国境炭素調整という考えが出てきた。2001年に米国ブッシュ政権が京都議定書からの離脱を宣言した後、欧州では、米国に対して国境調整措置を導入すべき、という意見が出た。米国から欧州への輸入品に対して、炭素関税を実施しようというものである。しかし、これは特定の国の産品への課税ということで、WTO
        違反の可能性もあり、論争を呼ぶ考えであった。しかも、自由貿易拡大を通じて世界全体が豊かになろうという考えが国際社会に共有された時代であった。そのため、国境調整措置は、具体的な政策として導入されるまでには至らなかった。日本でも財務省の関税局が国境炭素調整のWTOとの整合性や日本経済への効果、影響を検討し、筆者も参加した。しかし、貿易紛争につながりかねないということで、当時の日本の経済界では国境炭素調整を支持する声はほとんど聞かれなかったように記憶している。
      </p>
      <p>
        また、2009年当時、米国の法案に国境炭素調整の提案が含まれていたため、筆者が米国の議会スタッフに「どうやって製品の炭素含有量を計測するのか」と質問した。すると、「輸出メーカーに直接聞いてみる」と笑いながら答えていた。つまり、具体性に欠ける一提案でしかなかった。しかも当時の法案は、「新興国が10年後に米国並みに努力しなければ国境炭素調整を発動する」。という悠長なものであった。
      </p>
      <p>
        このように、少し前なら国境炭素調整の具体的な提案が行われることは、なかった。
      </p>
      <p>
        自由貿易促進の雰囲気を大きく転換させたのは米国のトランプ前大統領だろう。トランプ大統領は、アメリカ・ファーストを唱え、米国の貿易赤字を問題視した。そして、2018年に太陽光パネルと洗濯機に対する関税を大幅に上げた。続いて、鉄鋼とアルミニウムに対する関税も導入し、日本も影響を受けることとなった。さらに、中国産品に対して、関税を課し、中国との貿易戦争につながっていった。
      </p>
      <p>
        トランプ大統領は、パンドラの箱を開けてしまった。それまで、国際社会が前提としていたグローバル化、自由貿易促進、関税の引き下げを、一気に180度転換させてしまったのである。国際的な多国間による協調主義から、二国間での交渉の重視が前面に出たのである。
      </p>
      <p>
        そして、一部の市民に眠っていたグローバリズムへの反感が、ここにきて一気に噴き出している。国際動向を見れば、英国のEUからの離脱も、いろいろな側面はあるが、貿易の自由化、グローバリズムの促進に対する反動という側面がある。その後のロシアのウクライナ侵攻も含めて、国際社会は大きな転機を迎えたのだ。バイデン氏との大統領選に負けたあともトランプ氏が根強い人気をもっているのは、この反グローバリズムの流れがあるといえよう。
      </p>
      <p>
        こういった反グローバリズムの流れがあって初めて、反自由貿易的なEUの国境炭素調整の具体化が可能になったと考えられる。
      </p>
      <p>
        EUの国境炭素調整の提案は、それまでの各国が行ってきた提案と異なり、かなり踏み込んだ、具体的、かつ、詳細な提案になっている。2021年7月に提案され、セメント、鉄鋼、アルミニウム、肥料、電力などが国境炭素調整の候補とされ、2026年にも徴収を開始しようとしている。その後、議会では、化学品、水素、アンモニアなども加えるべきだと提案された。2009年頃の米国提案と異なり、EUETSの15年の経験を踏まえて、製品の炭素含有量の計測もかなり具体的だ。この仕組みでは、
        <span className="border border-black px-2 mx-1 font-bold">②</span>
        業者は、
        <span className="border border-black px-2 mx-1 font-bold">②</span>
        品に対して EUETS と同様の{" "}
        <span className="border border-black px-2 mx-1 font-bold">B</span>{" "}
        をEUETSと連動した価格で購入しなければならない。しかし、
        <span className="border border-black px-2 mx-1 font-bold">③</span>
        国が排出量取引を実施してEUETSとリンクしていれば免除される。あるいは、
        <span className="border border-black px-2 mx-1 font-bold">③</span>国が
        <span className="border border-black px-2 mx-1 font-bold">④</span>
        を導入していれば、その金額だけ、Bの購入を減免するというのである。つまり、
        <span className="border border-black px-2 mx-1 font-bold">④</span>
        を導入していれば、支払い義務は発生しない。EU以外の国にも、{" "}
        <span className="border border-black px-2 mx-1 font-bold">④</span>
        を通じて排出削減に取り組んでもらい、グローバルな削減を進めようというのである。
      </p>
      <p>
        確かに、EUの国境炭素調整の提案はグローバルに排出削減を進めようとするものだが、他国から見ると理想的な政策ではない。EU製品よりも日本製品の効率がよく、排出が少なくても、日本製品に
        <span className="inline-block border-b border-black w-16 mx-1"></span>
        購入の義務が課されるという、反グローバリズム的で不公平な面もある。いわゆる暗示的炭素価格にもまったく配慮されていないことも問題だ。暗示的炭素価格とは炭素税や排出量取引のように炭素価格が明確ではないが、排出削減につながる政策や税制のことを指している。たとえば、エネルギー関連税制は化石燃料に課されていて、温室効果ガス排出削減を直接の目的とはしていないが、結果的に排出削減に貢献している。
      </p>
      <p>
        省エネ法によるエネルギー管理制度は、一定規模の事業所に毎年の1%のエネルギー効率改善を促す制度であり、強い罰則はないものの日本の省エネルギー促進に貢献しており、やはり結果的に、排出削減に貢献している。同じく省エネ法のトップランナー制度も、さまざまな製品のエネルギー効率のトップランナーを示し、他の事業者にそのレベルまで製品の効率改善を促すもので、やはり、使用段階でのエネルギー消費削減、つまり、排出削減に貢献してきた。しかし、EUのCBAM
        ではこれらの政策は考慮されないのだ。
      </p>
      <p>
        このようにEUのCBAMは完全な制度ではない。しかし、
        <span className="underline decoration-1 underline-offset-4 font-semibold">
          このようなある種一方的な措置も、気候変動という大きな課題に立ち向かうには、必要悪としてやむを得ない面もある
        </span>
        <sup className="font-bold">(4)</sup>
        のではないだろうか。実際、この提案がなされた頃、インドネシア、ベトナム等の東南アジア各国で、カーボンプライシングの導入検討が始まった。欧州委員会の期待どおり、新興国,途上国でのカーボンプライシングの導入を促進している可能性がある。
      </p>
      <div className="text-sm text-gray-600 border-t pt-2 mt-4">
        (出典: 有村俊秀 日引聡『入門 環境経済学(新版)』中公新書,
        2023年。問題作成の都合で、一部省略したところがある。)
      </div>
    </div>
  </div>
);

const QuestionContentII = () => (
  <div className="space-y-6 text-justify">
    <div className="text-xl font-bold border-b-2 border-black pb-2 mb-4">
      II. 以下の文章は、国際連合経済社会局
      (UN-DESA)による、世界の人口動態・教育・持続的発展に関する政策提言書である。この文章を読んで、下記の問い1~8に答えよ。(40点)
    </div>

    <h3 className="font-bold text-lg mt-6 text-blue-900">Introduction</h3>
    <p>
      Education is a key determinant of levels and trends of fertility,
      mortality and migration. In turn, coverage and investment in education are
      influenced by the rate of growth and the age structure of the population.
      Education and training over the life course are critically important to
      sustain socioeconomic development, especially in modern economies
      increasingly driven by innovation and productivity growth. From a
      macroeconomic perspective, a well-trained and well-educated workforce
      reinforces the positive impacts of the demographic dividend and tempers
      the fiscal and economic challenges associated with rapidly aging
      populations, while contributing to the achievement of various Sustainable
      Development Goals and to the realization of the Vision Statement of the
      Secretary-General on Transforming Education. This policy brief summarizes
      some policy implications in these and other interlinkages between
      population, education, and sustainable development.
    </p>

    <h3 className="font-bold text-lg mt-6 text-blue-900">
      Population age structure affects education spending, human capital
      formation and economic growth
    </h3>
    <p>
      Per capita investment in human capital relative to GDP per capita varies
      widely across countries and tends to be negatively associated with the
      ratio of young people to the working-age population, illustrating a
      trade-off between the number of children and per capita investments in
      human capital. For countries with high fertility and large proportions of
      children and youth, per capita spending on the human capital of young
      people is typically less than half as much as in countries with older
      population age structures.
    </p>

    <h3 className="font-bold text-lg mt-6 text-blue-900">
      Global school-age population will peak before 2035 in most regions...
    </h3>
    <p>
      The global school-age population aged 6-11 years (range associated to
      primary education) is expected to reach an all-time high of 820 million in
      2023. It is projected to drop to 774 million in 2032, reach a secondary
      peak of around 806 million in the early 2050s, and decline continuously
      thereafter.
    </p>
    <p>
      The projected global trend of the school-age population aged 12-17 years
      (associated to secondary education) and [that] of those aged 18-23 years
      (associated to tertiary education) are similar to the projected trend of
      the school-age population aged 6-11 years, shifted in time by 6 and 12
      years, respectively. Thus, the global school-age population aged 12-17
      years is projected to reach a peak of nearly 816 million in 2029 and then
      begin to fall. The school-age population aged 18-23 years (tertiary
      education) is projected to reach an all-time high of 811 million by 2035
      and follow a similar downward trend thereafter.
    </p>

    <h3 className="font-bold text-lg mt-6 text-blue-900">
      ... with the exception of Africa and Western Asia
    </h3>
    <p>
      Figure 1 shows the projected regional trends by age group. Eastern and
      South-Eastern Asia are expected to experience the largest decline in the
      school-age population aged 6-23 years between 2022 and 2050. The second
      largest decline over this period will take place in Central and Southern
      Asia. Sub-Saharan Africa will see the largest increase across all the
      three age segments.
    </p>

    {/* Dummy Figure 1 using flexbox to represent the bar chart */}
    <div className="border border-gray-300 p-4 bg-gray-50 my-6 rounded">
      <div className="font-bold text-sm text-center mb-4">
        Figure 1. Projected change in the size of the school-age population (in
        millions) for three age segments, globally and by region, 2022-2050
      </div>
      <div className="text-xs space-y-3">
        {[
          { name: "World", v1: -11.6, v2: 16.2, v3: 44.1 },
          { name: "Sub-Saharan Africa", v1: 95.1, v2: 103.9, v3: 110.0 }, // v3 estimated for visual
          {
            name: "Northern Africa and Western Asia",
            v1: 3.2,
            v2: 9.4,
            v3: 13.7,
          },
          {
            name: "Central and Southern Asia",
            v1: -21.2,
            v2: -17.3,
            v3: -13.2,
          },
          {
            name: "Eastern and South-Eastern Asia",
            v1: -57.2,
            v2: -50.0,
            v3: -42.1,
          },
          {
            name: "Latin America and the Caribbean",
            v1: -11.6,
            v2: -10.2,
            v3: -9.9,
          },
          { name: "Australia/New Zealand", v1: 0.0, v2: 0.0, v3: 0.1 },
          { name: "Oceania (excl. Aus/NZ)", v1: 0.2, v2: 0.3, v3: 0.4 },
          {
            name: "Europe and Northern America",
            v1: -10.8,
            v2: -11.2,
            v3: -8.8,
          },
        ].map((d, i) => (
          <div key={i} className="flex items-center">
            <div className="w-1/3 text-right pr-2 truncate">{d.name}</div>
            <div className="w-2/3 flex border-l border-black relative h-10 items-center">
              <div
                className="absolute left-0 w-full flex flex-col justify-center gap-[2px] h-full"
                style={{ marginLeft: d.v1 < 0 ? "0" : "0" }}
              >
                {/* Since simple flex doesn't easily align positive/negative bars around a center line without extra logic, we use a trick. */}
                {/* Zero line is at 50% width. Values range from -60 to 110. */}
                {[-d.v1, -d.v2, -d.v3].map((val, idx) => {
                  const isNeg = val > 0; // Inverted because chart goes left for negative
                  const width = Math.abs(val) * 0.6; // Scale factor
                  const colors = ["bg-black", "bg-gray-500", "bg-gray-200"];
                  return (
                    <div
                      key={idx}
                      className="relative h-[8px] flex items-center"
                    >
                      {isNeg ? (
                        <div
                          className={`absolute right-1/2 h-full ${colors[idx]}`}
                          style={{ width: `${width}%` }}
                        ></div>
                      ) : (
                        <div
                          className={`absolute left-1/2 h-full ${colors[idx]} border border-gray-300`}
                          style={{ width: `${width}%` }}
                        ></div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
        <div className="flex justify-center gap-4 mt-4 pt-2 border-t text-[10px]">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-black mr-1"></div> Ages 6-11
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-gray-500 mr-1"></div> Ages 12-17
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-gray-200 border mr-1"></div> Ages 18-23
          </div>
        </div>
      </div>
    </div>

    <h3 className="font-bold text-lg mt-6 text-blue-900">
      Fertility decline facilitates increased spending per student and improved
      quality of education
    </h3>
    <p>
      Overall, the global school-age population aged 6-23 years was around 2.3
      billion in 2022. It is projected to{" "}
      <span className="border border-black px-2 mx-1 font-bold">( A )</span> to
      nearly 2.4 billion in 2030 and oscillate within that range until 2056.
      However, the proportion of the school-age population aged 6-23 years is
      projected to{" "}
      <span className="border border-black px-2 mx-1 font-bold">( B )</span> in
      all regions in the coming decades, providing an opportunity for many
      countries to invest in quality education and to increase{" "}
      <span className="border border-black px-2 mx-1 font-bold">( C )</span>{" "}
      without necessarily increasing{" "}
      <span className="border border-black px-2 mx-1 font-bold">( D )</span> on
      the school-age population.
    </p>
    <p>
      This easing of the demographic pressure on educational spending is an
      important benefit of the fertility decline as part of the demographic
      transition. A detailed study of the fiscal implications of such changes in
      10 countries in Latin America found that projected reductions in the
      school-age population would permit large increases in spending per
      student, reaching the average levels of per capita expenditure of OECD
      countries and facilitating the achievement of universal secondary
      education with little or no increase in taxes.
    </p>
    <p>
      From the mid-2010s to 2020, public spending on education as a share of GDP
      had risen gradually for countries in all income groups, but this trend was
      abruptly interrupted in many countries by the COVID-19 pandemic. Even
      before the pandemic, there were large inequalities in public spending per
      capita: in 2020, average spending in sub-Saharan Africa was $254 and South
      Asia, $358, a small fraction of the average level in Europe and Central
      Asia, $6,156. Low-income and lower-middle-income countries will need to
      make an extraordinary effort to recover from learning losses and resume
      progress towards the universal completion of primary and secondary
      education by 2030, as prescribed by target 4.1 of the Sustainable
      Development Goals. International cooperation in this regard is needed now
      more than ever.
    </p>

    <h3 className="font-bold text-lg mt-6 text-blue-900">
      Impact of education on employment and earnings varies by income and
      demographic context
    </h3>
    <p>
      In high-income and upper-middle-income countries, labor force
      participation and earnings increase with educational attainment. In these
      countries, workers with at least upper-secondary education are more likely
      to find employment and receive higher earnings than those with lower
      educational levels. The unemployment rate is typically much higher for
      workers who have not completed upper-secondary education. In such
      countries, policies to support the completion of secondary education,
      facilitate school-to-work transitions, and remove barriers to employment
      can help individuals obtain better-compensated, more productive
      employment, while benefitting the macroeconomy and alleviating fiscal
      pressure from unemployment insurance programs.
    </p>
    <p>
      In low-income and lower-middle-income countries, individuals with higher
      levels of education do not necessarily have higher labor force
      participation rates. A large share of economic activity and employment in
      low-income economies is concentrated in the informal sector, agriculture,
      manufacturing, and trade, where skilled job opportunities are less
      abundant. Highly skilled workers, namely those with college education or
      higher, in these countries tend to have higher unemployment rates than
      those with lower educational levels. These countries need to address the
      challenge of improving the access to and quality of their education
      systems while expanding employment opportunities for an increasingly
      skilled labor force. Such an expansion requires an environment conducive
      to sustained economic growth.
    </p>
    <p>
      More highly educated workers generally have better employment
      opportunities and health and do less physically demanding work than
      workers with less schooling. At older ages, these factors enhance their
      ability and willingness to remain in the workforce. In high-income
      countries and some upper-middle-income countries, people with advanced
      education are more likely to remain employed past the age of 65 than those
      with less education,{" "}
      <span className="border border-black px-4 mx-1 font-bold">( E )</span>.
    </p>

    <h3 className="font-bold text-lg mt-6 text-blue-900">
      Stark inequalities in access to preschool (early childhood) education
      require urgent action
    </h3>
    <p>
      Globally, more than 175 million children do not have access to early
      childhood education. In 2020, nearly one half of pre-primary-age children
      were not enrolled in an early childhood education program. Most children
      who miss out on early childhood education live in low-income countries: in
      93 developing countries or areas with data available between 2013 and
      2021, 71 percent of children aged 3-5 years did not attend such a program;
      this proportion was nearly 82 percent for the least developed countries.
      Deprivation of early education imposes high costs for individuals and for
      societies; conversely, investments in preschool and childcare yield high
      returns, of 4 to 16 times the amount spent in such programs.
    </p>

    <h3 className="font-bold text-lg mt-6 text-blue-900">
      Despite increased enrollments, further improvements are needed in quality
      and completion rates
    </h3>
    <p>
      In low-income countries, the number of children enrolled in primary school
      quadrupled between 1990 and 2020, an expansion driven by population growth
      and higher rates of school participation. In most regions, the primary net
      enrollment rate in 2020 was 90 percent or higher, although in sub-Saharan
      Africa 80 percent of primary school-age children were enrolled, up from 61
      percent in 2000. At the lower secondary level, the net enrollment rate was
      85 percent in 2020 globally, compared with 67 percent at the upper
      secondary level. During the past three decades, the expansion of tertiary
      education has been particularly rapid in sub-Saharan Africa, Northern
      Africa and Western Asia, and Central and Southern Asia, with a nearly
      six-fold increase in the number of students.
    </p>
    <p>
      <span className="border border-black px-4 mx-1 font-bold">( F )</span> In
      2020, the completion rate for primary education was 87 percent globally,
      but only 63 percent in sub-Saharan Africa. At the lower- and
      upper-secondary levels, completion rates worldwide in 2020 were 77 and 58
      percent, respectively. Low-income countries have much lower completion
      rates: just over half for primary school and slightly more than one third
      for lower secondary education.
    </p>

    <h3 className="font-bold text-lg mt-6 text-blue-900">
      Improved education of women has not erased gender gaps in all regions or
      in labor markets
    </h3>
    <p>
      The gender gap in school enrollment and attendance has declined globally
      over the past two decades. In 2020, the global out-of-school rates for
      primary, lower-secondary and upper-secondary levels of education had a gap
      of less than 2 percent each. However, larger gender gaps remain at each
      level in sub-Saharan Africa and in Northern Africa and Western Asia.
      Low-income countries are farthest from gender parity in enrollment, as
      they have made significant yet relatively slow progress over the past 10
      years. For lower-secondary education, enrollment rates for young women in
      low-income countries are still 5 percentage points lower than for young
      men, while at the upper-secondary level the disadvantage was 9 percentage
      points. Globally, girls have an advantage regarding completion rates at
      each education level, with timely completion two percentage points higher
      for girls than for boys in 2020. However, girls' completion rates lag in
      Central and Southern Asia and sub-Saharan Africa at the upper-secondary
      level. In some regions, the female advantage in enrollment, educational
      achievement and school performance has been long-standing. However, those
      gains have not translated into equivalent success in the labor market,
      where women remain at a disadvantage in most countries.
    </p>

    <h3 className="font-bold text-lg mt-6 text-blue-900">
      Lifelong learning more important now than ever
    </h3>
    <p>
      Demographic changes, along with new technologies and globalization are
      transforming the world of work, bringing fresh opportunities and novel
      challenges for people to access decent jobs and for companies to thrive
      and adapt. The COVID-19 pandemic disrupted labor markets worldwide and
      accelerated structural transformations related to remote and flexible
      work, digitalization and the demand for new types of jobs and skills.
    </p>
    <p>
      These changes are taking place in the context of progressive aging of the
      global population. With unprecedented numbers of people surviving to
      advanced ages, lifelong learning and the re-skilling of workers are more
      important now than ever. Examples include Finland's reform of the
      vocational education and training program, the public-private partnerships
      in Nigeria to develop digital platforms for youth training, and Costa
      Rica's National Institute for Training program on information and
      communications technologies. Strengthening of intergenerational workforces
      can alleviate associated fiscal pressures on health and pension systems
      and contribute to sustained and inclusive economic growth.
    </p>
    <p>
      Significant progress has been made in access to adult learning and
      education, notably in the participation of women and other disadvantaged
      and vulnerable groups, such as Indigenous Peoples, rural populations,
      migrants, older persons, persons with disabilities, and prisoners, who
      often have limited access to learning opportunities. However, significant
      gaps and challenges remain. Among 159 countries and areas with available
      data, about 60 percent reported no improvement in participation by persons
      with disabilities, migrants or prisoners. In 24 percent of cases, the
      participation of rural populations and of older persons had declined.
    </p>

    <h3 className="font-bold text-lg mt-6 text-blue-900">
      Staying in school is closely linked to prevention of child marriage and
      early childbearing
    </h3>
    <p>
      [Education completion rates vary significantly between countries, with
      countries in sub-Saharan Africa generally concentrated in the lower range
      of graduation rates, while those in Southeast Asia, Latin America, and the
      Caribbean tend to have higher graduation rates. However,] studies in
      countries of sub-Saharan Africa, Latin America and the Caribbean, and
      Europe and Northern America have shown that the earlier girls marry, the
      less likely they are to be literate or to attend and complete secondary
      education. Similarly, girls who give birth before the age of 18 have worse
      educational and labor market outcomes than those who do not.
    </p>
    <p>
      These relationships are also reflected at the population level: across
      countries, adolescent fertility rates among girls aged 10-14 years are
      negatively correlated with female education completion rates at the
      primary, lower-secondary and upper-secondary levels. [While this
      correlation appears to be a linear relationship at the primary level, it
      becomes non-linear at the upper-secondary level.]
    </p>
    <div className="text-center text-gray-500 italic my-4">
      (Figure 2 in the original article is omitted.)
    </div>
    <p>
      Child marriage is more common in low and middle-income countries that do
      not have a minimum legal age of marriage or do not enforce existing laws,
      especially in rural areas. Rigorous enforcement of a minimum legal age of
      marriage brings benefits to both individuals and the society.
      Multisectoral empowerment programs that include life skills training,
      livelihood training, gender awareness training, exposure to future
      careers, and sexual and reproductive health training have been shown to
      raise school enrollment rates and to lower the risks of pregnancy and
      early childbearing.
    </p>

    <h3 className="font-bold text-lg mt-6 text-blue-900">
      Sexuality education brings multiple benefits for human development
    </h3>
    <p>
      Comprehensive sexuality education is a curriculum-based process of
      teaching and learning about the cognitive, emotional, physical and social
      aspects of sexuality. It supports achieving development objectives related
      to health, education and gender equality and tends to reduce adolescent
      fertility. Education on health, well-being, the human body, sex, and
      relationships, delivered when an adolescent's cognitive, emotional, and
      social development is taking place, yields a range of benefits, including
      the ability to learn better and lead a healthier and happier life.
    </p>
    <p>
      Sexuality education can help to reduce early or unintended pregnancies,
      enhance gender-equitable attitudes and reduce school dropout rates. It
      also contributes to delayed sexual initiation and reduced incidence of HIV
      and other sexually transmitted infections. When delivered in conjunction
      with reproductive health care, including contraceptive services,
      comprehensive sexuality education is a core component of effective
      pregnancy prevention programs among adolescents and young people. Schools
      are important sites for delivering such education because trained teachers
      can impart age-appropriate knowledge, attitudes and skills and can support
      learners and their families in accessing health and social protection
      services.
    </p>

    <h3 className="font-bold text-lg mt-6 text-blue-900">
      Access to education and recognition of credentials are key to migrant
      integration and success
    </h3>
    <p>
      Immigrants and their children, sometimes even those born in the host
      country, face various barriers in accessing quality education and learning
      opportunities. They are less likely to be enrolled in early childhood
      education, which can negatively impact their academic performance and
      lifetime educational attainment. Overcoming these barriers is critical for
      improving the educational outcomes of migrant children and promoting their
      integration into host societies.
    </p>
    <p>
      The proportion of governments giving migrants access to public education
      varies across regions. Countries in Central and Southern Asia and in
      Eastern and South-Eastern Asia had the lowest proportion of governments
      (50 percent each) reporting that they provided equal access to public
      education for all migrants, regardless of immigration status. Latin
      America and the Caribbean (82 percent) and Oceania (78 percent) had the
      highest proportions of governments reporting such policies.
    </p>
    <div className="text-center text-gray-500 italic my-4">
      (Figure 3 in the original article is omitted.)
    </div>
    <p>
      For countries of origin, the emigration of individuals with high levels of
      human capital and skills can have negative consequences in terms of
      productivity, provision of services and tax revenues, a phenomenon known
      as "brain drain." From the perspective of destination countries,
      immigration often brings a net gain in the human capital and skills of the
      average worker. In many OECD countries, immigrants are more likely to have
      attended or completed tertiary education than the native-born population.
      Host countries benefit from the influx of highly skilled migrants who
      often boost innovation, particularly in science and technology. But "brain
      waste" occurs when well-educated, highly skilled migrants are employed in
      occupations that require lower skill levels, resulting in a loss of income
      and a waste of human capital.
    </p>
    <p>
      In this regard, the Global Compact for Safe, Orderly and Regular Migration
      called for governments to facilitate the mutual recognition of the skills,
      qualifications and competencies of migrant workers at all skill levels and
      to promote demand-driven skills development to optimize the employability
      of migrants in formal labor markets in countries of destination and in
      countries of origin{" "}
      <span className="border border-black px-4 mx-1 font-bold">( G )</span>.
    </p>
  </div>
);

const QuestionContentIII = () => (
  <div className="space-y-6">
    <div className="text-xl font-bold border-b-2 border-black pb-2 mb-4">
      III. 記述問題 (15点)
    </div>
    <div className="bg-blue-50 p-6 rounded border border-blue-200">
      <p className="font-semibold mb-4 leading-relaxed">
        Logically explain at least one weakness of the following statement and
        then, based on these limitations, give your own opinion. Your response
        should have two or more well-formed paragraphs. You must write your
        answer in English in the provided box on your written answer sheet.
      </p>
      <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700">
        "While enrollment may be declining at many universities, admitting
        foreign students that may be financially, academically and socially
        unprepared to attend Japanese universities is unacceptable."
      </blockquote>
    </div>
  </div>
);

// ==========================================
// Answer Forms
// ==========================================

const AnswerFormI = ({ answers, onChange }) => (
  <div className="space-y-8">
    <div className="space-y-2">
      <h4 className="font-bold border-l-4 border-red-800 pl-2">問1</h4>
      <p className="text-sm text-gray-600 mb-2">
        問題文Aの空欄に当てはまる最も適切な語を問題文Bから、また、問題文Bの空欄に当てはまる最も適切な語を問題文Aからそれぞれ5文字以内で抜き出しなさい。
      </p>
      <div className="flex flex-col gap-2">
        <label className="text-sm font-semibold">
          問題文Aの空欄:
          <input
            type="text"
            maxLength={5}
            value={answers.q1_1_a}
            onChange={(e) => onChange("q1_1_a", e.target.value)}
            className="ml-2 border border-gray-400 p-1 rounded w-32"
          />
        </label>
        <label className="text-sm font-semibold">
          問題文Bの空欄:
          <input
            type="text"
            maxLength={5}
            value={answers.q1_1_b}
            onChange={(e) => onChange("q1_1_b", e.target.value)}
            className="ml-2 border border-gray-400 p-1 rounded w-32"
          />
        </label>
      </div>
    </div>

    <div className="space-y-2">
      <h4 className="font-bold border-l-4 border-red-800 pl-2">問2</h4>
      <p className="text-sm text-gray-600 mb-2">
        問題文Aの空欄①に当てはまる最も適切な文章を選びなさい。
      </p>
      <div className="space-y-2 text-sm bg-white p-3 rounded border">
        {["イ", "ロ", "ハ", "ニ", "ホ"].map((opt, i) => {
          const texts = [
            "自国の炭素強度が他国よりも大きければ、他国の排出は減っても、自国でそれを上回る排出増加となり、世界全体でも排出が増えてしまう。",
            "自国の炭素強度が他国よりも小さければ、他国の排出は減っても、自国でそれを上回る排出増加となり、世界全体でも排出が増えてしまう。",
            "他国の炭素強度が自国よりも大きければ、自国の排出は減っても、他国でそれを上回る排出増加となり、世界全体でも排出が増えてしまう。",
            "他国の炭素強度が自国よりも小さければ、自国の排出は減っても、他国でそれを上回る排出増加となり、世界全体でも排出が増えてしまう。",
            "自国と他国の炭素強度が同じであっても、世界全体の排出が増えてしまう。",
          ];
          return (
            <label
              key={opt}
              className="flex items-start gap-2 cursor-pointer hover:bg-gray-50 p-1 rounded"
            >
              <input
                type="radio"
                name="q1_2"
                value={opt}
                checked={answers.q1_2 === opt}
                onChange={(e) => onChange("q1_2", e.target.value)}
                className="mt-1"
              />
              <span>
                <strong>{opt}.</strong> {texts[i]}
              </span>
            </label>
          );
        })}
      </div>
    </div>

    <div className="space-y-2">
      <h4 className="font-bold border-l-4 border-red-800 pl-2">問3</h4>
      <p className="text-sm text-gray-600 mb-2">
        問題文Aの下線部(1)を説明する図を完成させるため、1〜4の組み合わせを選びなさい。
      </p>

      {/* 挿絵 SVG */}
      <div className="bg-white border p-4 rounded mb-4 overflow-x-auto">
        <svg viewBox="0 0 500 220" className="w-full min-w-[400px]">
          {/* 国内枠 */}
          <rect
            x="20"
            y="20"
            width="160"
            height="180"
            fill="none"
            stroke="black"
          />
          <text
            x="100"
            y="40"
            textAnchor="middle"
            fontSize="14"
            fontWeight="bold"
            fill="white"
            stroke="black"
            strokeWidth="0.5"
            className="px-2"
          >
            <tspan x="100" dy="0" fill="black">
              国内
            </tspan>
          </text>
          <text x="100" y="60" textAnchor="middle" fontSize="12">
            (厳しい気候変動対策)
          </text>

          <circle cx="100" cy="90" r="18" fill="none" stroke="black" />
          <text x="100" y="95" textAnchor="middle" fontSize="14">
            a
          </text>

          <path d="M 100 115 L 100 145" stroke="black" strokeDasharray="4" />
          <text x="100" y="135" textAnchor="middle" fontSize="10" bg="white">
            市場競争
          </text>

          <circle cx="100" cy="170" r="18" fill="none" stroke="black" />
          <text x="100" y="175" textAnchor="middle" fontSize="14">
            b
          </text>

          {/* 外国枠 */}
          <rect
            x="320"
            y="20"
            width="160"
            height="180"
            fill="none"
            stroke="black"
          />
          <text
            x="400"
            y="40"
            textAnchor="middle"
            fontSize="14"
            fontWeight="bold"
          >
            外国
          </text>
          <text x="400" y="60" textAnchor="middle" fontSize="12">
            (気候変動対策なし)
          </text>

          <circle cx="400" cy="90" r="18" fill="none" stroke="black" />
          <text x="400" y="95" textAnchor="middle" fontSize="14">
            c
          </text>

          <path d="M 400 115 L 400 145" stroke="black" strokeDasharray="4" />
          <text x="400" y="135" textAnchor="middle" fontSize="10">
            市場競争
          </text>

          <circle cx="400" cy="170" r="18" fill="none" stroke="black" />
          <text x="400" y="175" textAnchor="middle" fontSize="14">
            d
          </text>

          {/* 矢印 (輸入) c->a */}
          <path
            d="M 380 90 L 120 90"
            stroke="black"
            fill="none"
            markerEnd="url(#arrow)"
          />
          <text x="250" y="80" textAnchor="middle" fontSize="12">
            輸入
          </text>

          {/* 矢印 (輸出) b->d */}
          <path
            d="M 120 170 L 380 170"
            stroke="black"
            fill="none"
            markerEnd="url(#arrow)"
          />
          <text x="250" y="185" textAnchor="middle" fontSize="12">
            輸出
          </text>

          {/* 税関 (左) */}
          <rect
            x="200"
            y="110"
            width="36"
            height="40"
            fill="none"
            stroke="black"
          />
          <text x="218" y="135" textAnchor="middle" fontSize="12">
            税関
          </text>
          <path
            d="M 218 110 L 218 92"
            stroke="black"
            fill="none"
            markerEnd="url(#arrow-small)"
          />
          <text x="210" y="105" fontSize="12">
            e
          </text>
          <path
            d="M 218 150 L 218 168"
            stroke="black"
            fill="none"
            markerEnd="url(#arrow-small)"
          />
          <text x="210" y="165" fontSize="12">
            f
          </text>

          {/* 税関 (右) */}
          <rect
            x="264"
            y="110"
            width="36"
            height="40"
            fill="none"
            stroke="black"
          />
          <text x="282" y="135" textAnchor="middle" fontSize="12">
            税関
          </text>
          <path
            d="M 282 110 L 282 92"
            stroke="black"
            fill="none"
            markerEnd="url(#arrow-small)"
          />
          <text x="274" y="105" fontSize="12">
            g
          </text>
          <path
            d="M 282 150 L 282 168"
            stroke="black"
            fill="none"
            markerEnd="url(#arrow-small)"
          />
          <text x="274" y="165" fontSize="12">
            h
          </text>

          <defs>
            <marker
              id="arrow"
              viewBox="0 0 10 10"
              refX="9"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" />
            </marker>
            <marker
              id="arrow-small"
              viewBox="0 0 10 10"
              refX="9"
              refY="5"
              markerWidth="5"
              markerHeight="5"
              orient="auto-start-reverse"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" />
            </marker>
          </defs>
        </svg>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
        {["イ", "ロ", "ハ", "ニ", "ホ", "ヘ", "ト", "チ"].map((opt) => (
          <label
            key={opt}
            className="flex items-center gap-1 cursor-pointer bg-white p-2 border rounded hover:bg-gray-50"
          >
            <input
              type="radio"
              name="q1_3"
              value={opt}
              checked={answers.q1_3 === opt}
              onChange={(e) => onChange("q1_3", e.target.value)}
            />
            {opt}
          </label>
        ))}
      </div>
    </div>

    <div className="space-y-2">
      <h4 className="font-bold border-l-4 border-red-800 pl-2">問4</h4>
      <p className="text-sm text-gray-600 mb-2">
        下線部(2)について、「決定」の背景を示す表現を問題文Bから8〜12文字で抜き出しなさい。
      </p>
      <input
        type="text"
        value={answers.q1_4}
        onChange={(e) => onChange("q1_4", e.target.value)}
        className="w-full border border-gray-400 p-2 rounded"
        placeholder="8〜12文字で入力"
      />
      <div className="text-right text-xs text-gray-500">
        {answers.q1_4.length}文字
      </div>
    </div>

    <div className="space-y-2">
      <h4 className="font-bold border-l-4 border-red-800 pl-2">問5</h4>
      <p className="text-sm text-gray-600 mb-2">
        下線部(3)の問いに対する議論として言及されているものを2つ選びなさい。
      </p>
      <div className="space-y-2 text-sm bg-white p-3 rounded border">
        {["イ", "ロ", "ハ", "ニ", "ホ"].map((opt) => (
          <label
            key={opt}
            className="flex items-start gap-2 cursor-pointer hover:bg-gray-50 p-1 rounded"
          >
            <input
              type="checkbox"
              checked={answers.q1_5_1 === opt || answers.q1_5_2 === opt}
              onChange={() =>
                onChange(
                  answers.q1_5_1 === opt
                    ? "q1_5_1"
                    : answers.q1_5_2 === opt
                    ? "q1_5_2"
                    : !answers.q1_5_1
                    ? "q1_5_1"
                    : "q1_5_2",
                  answers.q1_5_1 === opt || answers.q1_5_2 === opt ? "" : opt
                )
              }
              className="mt-1"
            />
            <span>
              <strong>{opt}</strong>
            </span>
          </label>
        ))}
      </div>
    </div>

    <div className="space-y-2">
      <h4 className="font-bold border-l-4 border-red-800 pl-2">問6</h4>
      <p className="text-sm text-gray-600 mb-2">
        空欄②、③、④に当てはまる語の組み合わせとして最も適切なものを選びなさい。
      </p>
      <div className="space-y-2 text-sm bg-white p-3 rounded border">
        {["イ", "ロ", "ハ", "ニ"].map((opt, i) => {
          const vals = [
            "②輸入 ③輸出 ④国境炭素調整",
            "②輸出 ③輸入 ④カーボンプライシング",
            "②輸出 ③輸入 ④国境炭素調整",
            "②輸入 ③輸出 ④カーボンプライシング",
          ];
          return (
            <label
              key={opt}
              className="flex items-start gap-2 cursor-pointer hover:bg-gray-50 p-1 rounded"
            >
              <input
                type="radio"
                name="q1_6"
                value={opt}
                checked={answers.q1_6 === opt}
                onChange={(e) => onChange("q1_6", e.target.value)}
                className="mt-1"
              />
              <span>
                <strong>{opt}.</strong> {vals[i]}
              </span>
            </label>
          );
        })}
      </div>
    </div>

    <div className="space-y-2">
      <h4 className="font-bold border-l-4 border-red-800 pl-2">問7</h4>
      <p className="text-sm text-gray-600 mb-2">
        下線部(4)の評価について、あなたの賛否を明らかにしたうえで、問題文A・Bの議論を踏まえた論拠を2つ挙げて論じなさい。(130~160字)
      </p>
      <textarea
        value={answers.q1_7}
        onChange={(e) => onChange("q1_7", e.target.value)}
        className="w-full h-32 border border-gray-400 p-2 rounded resize-y"
        placeholder="ここに記述してください"
      />
      <div
        className={`text-right text-xs font-bold ${
          answers.q1_7.length >= 130 && answers.q1_7.length <= 160
            ? "text-green-600"
            : "text-red-500"
        }`}
      >
        {answers.q1_7.length} / 130〜160字
      </div>
    </div>
  </div>
);

const AnswerFormII = ({ answers, onChange, onCheck }) => (
  <div className="space-y-8">
    <div className="space-y-2">
      <h4 className="font-bold border-l-4 border-red-800 pl-2">問1</h4>
      <p className="text-sm text-gray-600 mb-2">
        本文の内容と最も整合的なものを1つ選びなさい。
      </p>
      <div className="grid grid-cols-5 gap-2 text-sm">
        {["a", "b", "c", "d", "e"].map((opt) => (
          <label
            key={opt}
            className="flex justify-center items-center gap-1 cursor-pointer bg-white p-2 border rounded hover:bg-gray-50"
          >
            <input
              type="radio"
              name="q2_1"
              value={opt}
              checked={answers.q2_1 === opt}
              onChange={(e) => onChange("q2_1", e.target.value)}
            />
            ({opt})
          </label>
        ))}
      </div>
    </div>

    <div className="space-y-2">
      <h4 className="font-bold border-l-4 border-red-800 pl-2">問2</h4>
      <p className="text-sm text-gray-600 mb-2">
        (A) (B) (C) (D) に入る語句の組み合わせとして最も適切なものを選びなさい。
      </p>
      <div className="flex flex-col gap-2 text-sm bg-white p-3 rounded border">
        {["a", "b", "c", "d"].map((opt) => (
          <label
            key={opt}
            className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-1 rounded"
          >
            <input
              type="radio"
              name="q2_2"
              value={opt}
              checked={answers.q2_2 === opt}
              onChange={(e) => onChange("q2_2", e.target.value)}
            />
            ({opt})
          </label>
        ))}
      </div>
    </div>

    <div className="space-y-2">
      <h4 className="font-bold border-l-4 border-red-800 pl-2">問3</h4>
      <p className="text-sm text-gray-600 mb-2">
        「財政」「所得」「自立」の3つのキーワードをすべて使用し、高齢者と社会全体に及ぼす影響について日本語で説明しなさい。(30~40字)
      </p>
      <textarea
        value={answers.q2_3}
        onChange={(e) => onChange("q2_3", e.target.value)}
        className="w-full h-20 border border-gray-400 p-2 rounded resize-none"
        placeholder="ここに記述してください"
      />
      <div
        className={`text-right text-xs font-bold ${
          answers.q2_3.length >= 30 && answers.q2_3.length <= 40
            ? "text-green-600"
            : "text-red-500"
        }`}
      >
        {answers.q2_3.length} / 30〜40字
      </div>
    </div>

    <div className="space-y-2">
      <h4 className="font-bold border-l-4 border-red-800 pl-2">問4</h4>
      <p className="text-sm text-gray-600 mb-2">
        ( F ) に入る文として最も適切なものを選びなさい。
      </p>
      <div className="grid grid-cols-5 gap-2 text-sm">
        {["a", "b", "c", "d", "e"].map((opt) => (
          <label
            key={opt}
            className="flex justify-center items-center gap-1 cursor-pointer bg-white p-2 border rounded hover:bg-gray-50"
          >
            <input
              type="radio"
              name="q2_4"
              value={opt}
              checked={answers.q2_4 === opt}
              onChange={(e) => onChange("q2_4", e.target.value)}
            />
            ({opt})
          </label>
        ))}
      </div>
    </div>

    <div className="space-y-2">
      <h4 className="font-bold border-l-4 border-red-800 pl-2">問5</h4>
      <p className="text-sm text-gray-600 mb-2">
        10歳から14歳までの少女の出産率と女性の高等学校の卒業率との関係の特徴を捉えたグラフを選びなさい。
      </p>
      <div className="grid grid-cols-4 gap-2 mt-2">
        {["a", "b", "c", "d", "e", "f", "g", "h"].map((id) => (
          <div
            key={id}
            className={`border p-2 bg-white flex flex-col items-center cursor-pointer transition-colors ${
              answers.q2_5 === id
                ? "ring-2 ring-red-500 border-red-500"
                : "hover:bg-gray-50"
            }`}
            onClick={() => onChange("q2_5", id)}
          >
            <div className="flex w-full items-center mb-1">
              <input
                type="radio"
                checked={answers.q2_5 === id}
                readOnly
                className="mr-1"
              />
              <span className="text-xs font-bold">({id})</span>
            </div>
            {/* モックグラフのSVG */}
            <svg
              viewBox="0 0 100 100"
              className="w-full h-16 pointer-events-none"
            >
              <polyline points="10,10 10,90 90,90" fill="none" stroke="gray" />
              {id === "a" && (
                <line x1="20" y1="20" x2="80" y2="80" stroke="black" />
              )}
              {id === "b" && (
                <line x1="20" y1="80" x2="80" y2="20" stroke="black" />
              )}
              {id === "c" && (
                <path d="M 20 80 Q 40 40 80 20" fill="none" stroke="black" />
              )}
              {id === "d" && (
                <path d="M 20 20 Q 40 80 80 80" fill="none" stroke="black" />
              )}
              {id === "e" && (
                <path d="M 20 20 Q 50 90 80 20" fill="none" stroke="black" />
              )}
              {id === "f" && (
                <path d="M 20 80 Q 50 10 80 80" fill="none" stroke="black" />
              )}
              {id === "g" && (
                <line x1="20" y1="50" x2="80" y2="50" stroke="black" />
              )}
              {id === "h" && (
                <polyline
                  points="20,20 20,80 80,80"
                  fill="none"
                  stroke="black"
                />
              )}
              {/* 散布図の点 */}
              <circle
                cx="30"
                cy={id === "b" || id === "c" || id === "f" ? 70 : 30}
                r="2"
                fill="blue"
              />
              <polygon
                points="50,45 47,52 53,52"
                fill="green"
                transform={
                  id === "e"
                    ? "translate(0,20)"
                    : id === "f"
                    ? "translate(0,-20)"
                    : ""
                }
              />
              <path
                d="M 70 27 L 73 32 L 67 32 Z"
                fill="red"
                transform={
                  id === "a" || id === "d" || id === "f"
                    ? "translate(0,40)"
                    : ""
                }
              />
            </svg>
          </div>
        ))}
      </div>
    </div>

    <div className="space-y-2">
      <h4 className="font-bold border-l-4 border-red-800 pl-2">問6</h4>
      <p className="text-sm text-gray-600 mb-2">
        本文で示唆されていない政策を1つ選びなさい。
      </p>
      <div className="grid grid-cols-5 gap-2 text-sm">
        {["a", "b", "c", "d", "e"].map((opt) => (
          <label
            key={opt}
            className="flex justify-center items-center gap-1 cursor-pointer bg-white p-2 border rounded hover:bg-gray-50"
          >
            <input
              type="radio"
              name="q2_6"
              value={opt}
              checked={answers.q2_6 === opt}
              onChange={(e) => onChange("q2_6", e.target.value)}
            />
            ({opt})
          </label>
        ))}
      </div>
    </div>

    <div className="space-y-2">
      <h4 className="font-bold border-l-4 border-red-800 pl-2">問7</h4>
      <p className="text-sm text-gray-600 mb-2">
        ( G ) に入る単語として最も適切なものを選びなさい。
      </p>
      <div className="grid grid-cols-5 gap-2 text-sm">
        {["a", "b", "c", "d", "e"].map((opt) => (
          <label
            key={opt}
            className="flex justify-center items-center gap-1 cursor-pointer bg-white p-2 border rounded hover:bg-gray-50"
          >
            <input
              type="radio"
              name="q2_7"
              value={opt}
              checked={answers.q2_7 === opt}
              onChange={(e) => onChange("q2_7", e.target.value)}
            />
            ({opt})
          </label>
        ))}
      </div>
    </div>

    <div className="space-y-2">
      <h4 className="font-bold border-l-4 border-red-800 pl-2">問8</h4>
      <p className="text-sm text-gray-600 mb-2">
        本文に基づく政策立案として適切でないものを2つ選びなさい。
      </p>
      <div className="space-y-2 text-sm bg-white p-3 rounded border">
        {["a", "b", "c", "d", "e"].map((opt) => (
          <label
            key={opt}
            className="flex items-start gap-2 cursor-pointer hover:bg-gray-50 p-1 rounded"
          >
            <input
              type="checkbox"
              checked={answers.q2_8_1 === opt || answers.q2_8_2 === opt}
              onChange={() => onCheck("q2_8_1", "q2_8_2", opt)}
              className="mt-1"
            />
            <span>
              <strong>({opt})</strong>
            </span>
          </label>
        ))}
      </div>
    </div>
  </div>
);

const AnswerFormIII = ({ answers, onChange }) => (
  <div className="space-y-4">
    <div className="font-bold border-l-4 border-red-800 pl-2">
      記述解答用紙② (15点)
    </div>
    <p className="text-sm text-gray-600">
      ※ 15cm×25行 の解答欄を想定しています。英語で2段落以上で記述してください。
    </p>
    <textarea
      value={answers.q3_1}
      onChange={(e) => onChange("q3_1", e.target.value)}
      className="w-full h-[400px] border-2 border-gray-400 p-4 rounded-md shadow-inner text-lg leading-relaxed focus:ring focus:ring-blue-200 outline-none"
      placeholder="Write your answer here..."
    />
    <div className="text-right text-gray-500 text-sm">
      Words:{" "}
      {
        answers.q3_1
          .trim()
          .split(/\s+/)
          .filter((w) => w.length > 0).length
      }
    </div>
  </div>
);

export default App;
