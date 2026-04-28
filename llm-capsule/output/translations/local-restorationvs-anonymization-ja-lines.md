# Local Restoration vs Anonymization — 日本語翻訳

## Section 01: Hero

Local Restoration vs Anonymization
ローカル復元 vs 匿名化

Compare local restoration (restoration) with anonymization for enterprise AI. Anonymization is permanent; local restoration restores real enterprise data in AI outputs automatically.
エンタープライズAI向けにローカル復元と匿名化を比較します。匿名化は永久的ですが、ローカル復元はAI出力で実際のエンタープライズデータを自動的に復元します。

## Section 02: Overview

Anonymization and local restoration represent opposite approaches to data protection in AI workflows. Anonymization permanently removes identifying information. Local restoration temporarily protects data and restores it after AI processing — producing enterprise-ready outputs with real data.
匿名化とローカル復元は、AIワークフローにおけるデータ保護の正反対のアプローチです。匿名化は識別情報を永久的に除去します。ローカル復元はデータを一時的に保護し、AI処理後に復元して — 実データを含むエンタープライズ対応の出力を生成します。

## Section 03: How Anonymization Works

Anonymization techniques — k-anonymity, differential privacy, generalization, suppression — transform data so that individual records cannot be re-identified. The transformation is designed to be irreversible. Anonymized data is considered non-personal under most regulatory frameworks.
匿名化技術 — k-匿名性、差分プライバシー、一般化、抑制 — は、個別レコードを再識別できないようにデータを変換します。この変換は不可逆であるように設計されています。ほとんどの規制フレームワークにおいて、匿名化されたデータは非個人情報とみなされます。

## Section 04: Limitations

Irreversibility. Anonymization is permanent by design. Once data is anonymized, there is no automated path to recover original values. AI outputs based on anonymized data remain anonymous — they cannot reference real individuals, real accounts, or real events.
不可逆性。匿名化は設計上永久的です。データが匿名化されると、元の値を復元する自動化された手段はありません。匿名化されたデータに基づくAI出力は匿名のまま維持されます — 実在の個人、実際の口座、実際のイベントを参照できません。

Information loss. Generalization replaces specific values with ranges, suppression removes values entirely. Both reduce the information content AI models can work with.
情報損失。一般化は特定の値を範囲に置き換え、抑制は値を完全に除去します。どちらもAIモデルが活用できる情報量を減少させます。

Not designed for document intelligence. Anonymization techniques were developed for structured databases, not unstructured enterprise documents. Applying anonymization to contracts, reports, and correspondence produces severely degraded content.
文書インテリジェンス向けに設計されていない。匿名化技術は、非構造化エンタープライズ文書ではなく構造化データベース向けに開発されました。契約書、報告書、通信文に匿名化を適用すると、著しく品質が低下したコンテンツが生成されます。

## Section 05: How Local Restoration Differs

Local restoration (restoration) is the process of restoring AI outputs to their full enterprise context using locally stored mappings. Data is encapsulated (not anonymized) before AI processing — sensitive values are replaced with reversible, structure-preserving representations. After AI processing, the original values are restored automatically.
ローカル復元とは、ローカルに保存されたマッピングを使用してAI出力を完全なエンタープライズコンテキストに復元するプロセスです。AI処理前にデータは（匿名化ではなく）カプセル化されます — 機密値が可逆的で構造を保存する表現に置換されます。AI処理後、元の値が自動的に復元されます。

AI results are restored locally. LLM Capsule enables enterprise AI adoption while protecting sensitive data and preserving usable outputs.
AI結果はローカルで復元されます。LLM Capsuleは、機密データを保護し利用可能な出力を維持しながら、エンタープライズAI導入を可能にします。

## Section 06: Comparison Table

Reversibility
可逆性

Irreversible
不可逆

Fully reversible
完全に可逆

Output usability
出力の使用性

Anonymous, non-actionable
匿名、実行不可

Enterprise-ready, actionable
エンタープライズ対応、実行可能

Information loss
情報損失

Significant
重大

None (structure preserved)
なし（構造保存）

Document support
文書サポート

Structured data only
構造化データのみ

All document types
すべての文書タイプ

Post-processing required
後処理の必要性

Extensive manual work
大規模な手動作業

Automatic restoration
自動復元

Enterprise workflow fit
エンタープライズワークフロー適合性

Analytics / research only
分析／研究のみ

Full production workflows
完全な本番ワークフロー

## Section 07: Enterprise Workflow Example

Patient Discharge Summaries
患者退院サマリー

A hospital needs AI to generate discharge summaries from patient records. Anonymized records remove patient identifiers — but discharge summaries must reference real patient names, medications, and attending physicians to be clinically useful.
病院が患者記録から退院サマリーを生成するためにAIを必要としています。匿名化された記録は患者識別情報を除去しますが — 退院サマリーは臨床的に有用であるために、実際の患者名、薬剤、担当医を参照する必要があります。

LLM Capsule encapsulates patient records, AI generates structured summaries, and local restoration restores all patient identifiers into the discharge documents. The summaries are clinically ready without any manual re-identification.
LLM Capsuleが患者記録をカプセル化し、AIが構造化されたサマリーを生成し、ローカル復元がすべての患者識別情報を退院文書に復元します。サマリーは手動での再識別なしに臨床的に即使用可能です。

## Section 08: FAQ

What is the difference between anonymization and restoration?
匿名化と復元の違いは何ですか？

Anonymization permanently removes identifying data. Local restoration (restoration) temporarily protects data through reversible encapsulation and automatically restores original values in AI outputs.
匿名化は識別データを永久的に除去します。ローカル復元は、可逆的なカプセル化によりデータを一時的に保護し、AI出力で元の値を自動的に復元します。

When should I use anonymization vs local restoration?
匿名化とローカル復元はどのように使い分けるべきですか？

Use anonymization for research datasets and analytics where individual identity is not needed. Use local restoration (LLM Capsule) for production AI workflows where outputs must reference real enterprise data.
個人の身元が不要な研究データセットと分析には匿名化を使用します。出力が実際のエンタープライズデータを参照する必要がある本番AIワークフローにはローカル復元（LLM Capsule）を使用します。

## Section 09: CTA

See how LLM Capsule works with your data
LLM Capsuleがお客様のデータとどのように連携するかをご確認ください

Bring your documents, deployment constraints, and evaluation criteria. We demonstrate on your actual workflows.
文書、デプロイ要件、評価基準をお持ちください。お客様の実際のワークフローでデモンストレーションいたします。

Request a Demo
デモのご依頼

AWS Marketplace
AWS Marketplace
