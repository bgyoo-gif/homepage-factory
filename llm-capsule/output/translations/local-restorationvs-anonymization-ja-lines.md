# Local Restoration vs Anonymization — 日本語翻訳

## Section 01: Hero

Local Restoration vs Anonymization
ローカル復元 vs 匿名化

Compare local restoration (restoration) with anonymization for enterprise AI. Anonymization is permanent; local restoration restores real enterprise data in AI outputs automatically.
エンタープライズAI向けにローカル復元（復元）と匿名化を比較します。匿名化は永久的です。ローカル復元はAI出力内の実際のエンタープライズデータを自動的に復元します。

## Section 02: Overview

Overview
概要

How Anonymization Works
匿名化の仕組み

Limitations
制限事項

How LLM Capsule Differs
LLM Capsuleの違い

Comparison
比較

Enterprise Workflow Example
エンタープライズワークフロー例

FAQ
FAQ

Anonymization and local restoration represent opposite approaches to data protection in AI workflows. Anonymization permanently removes identifying information. Local restoration temporarily protects data and restores it after AI processing — producing enterprise-ready outputs with real data.
匿名化とローカル復元は、AIワークフローにおけるデータ保護の対極的なアプローチです。匿名化は識別情報を永久的に削除します。ローカル復元はデータを一時的に保護し、AI処理後に復元します — 実データを含むエンタープライズ対応の出力を生成します。

## Section 03: How Anonymization Works

Anonymization techniques — k-anonymity, differential privacy, generalization, suppression — transform data so that individual records cannot be re-identified. The transformation is designed to be irreversible. Anonymized data is considered non-personal under most regulatory frameworks.
匿名化技術 — k-匿名性、差分プライバシー、一般化、抑制 — はデータを変換し、個々のレコードが再識別されないようにします。変換は不可逆的に設計されています。匿名化されたデータは、ほとんどの規制フレームワークにおいて非個人データとみなされます。

## Section 04: Limitations

Irreversibility. Anonymization is permanent by design. Once data is anonymized, there is no automated path to recover original values. AI outputs based on anonymized data remain anonymous — they cannot reference real individuals, real accounts, or real events.
不可逆性。匿名化は設計上、永久的です。データが匿名化されると、元の値を回復する自動的な方法はありません。匿名化されたデータに基づくAI出力は匿名のままであり、実際の個人、実際のアカウント、実際のイベントを参照できません。

Information loss. Generalization replaces specific values with ranges ("age 35" → "30-40"). Suppression removes values entirely. Both reduce AI's ability to produce precise, actionable outputs.
情報損失。一般化は特定の値を範囲に置換します（「年齢35」→「30-40」）。抑制は値を完全に削除します。いずれもAIが正確で実行可能な出力を生成する能力を低下させます。

Not designed for document intelligence. Anonymization techniques were developed for structured databases, not unstructured enterprise documents. Applying anonymization to contracts, reports, and correspondence produces severely degraded content.
ドキュメントインテリジェンス向けに設計されていない。匿名化技術は構造化データベース向けに開発されたものであり、非構造化エンタープライズドキュメント向けではありません。契約書、レポート、通信文に匿名化を適用すると、著しく劣化したコンテンツが生成されます。

## Section 05: How LLM Capsule Differs

Local restoration (restoration) is the process of restoring AI outputs to their full enterprise context using locally stored mappings. Data is encapsulated (not anonymized) before AI processing — sensitive values are replaced with reversible, structure-preserving representations. After AI processing, the original values are restored automatically.
ローカル復元（復元）は、ローカルに保存されたマッピングを使用してAI出力を完全なエンタープライズコンテキストに復元するプロセスです。AI処理前にデータはカプセル化されます（匿名化されません）— 機密値は可逆的で構造保存型の表現に置換されます。AI処理後、元の値が自動的に復元されます。

AI results are restored locally. LLM Capsule enables enterprise AI adoption while protecting sensitive data and preserving usable outputs.
AI結果はローカルで復元されます。LLM Capsuleは機密データを保護し、使用可能な出力を維持しながら、エンタープライズAI導入を可能にします。

## Section 06: Comparison Table

Capability
機能

Anonymization
匿名化

Reversibility|Irreversible|Fully reversible
可逆性|不可逆|完全に可逆

Output usability|Anonymous, non-actionable|Enterprise-ready, actionable
出力の使用性|匿名的、実行不可能|エンタープライズ対応、実行可能

Information loss|Significant|None (structure preserved)
情報損失|重大|なし（構造保持）

Document support|Structured data only|All document types
ドキュメントサポート|構造化データのみ|すべてのドキュメントタイプ

Post-processing required|Extensive manual work|Automatic restoration
後処理の必要性|大規模な手動作業|自動復元

Enterprise workflow fit|Analytics / research only|Full production workflows
エンタープライズワークフロー適合性|分析 / 研究のみ|完全な本番ワークフロー

## Section 07: Enterprise Workflow Example

Patient Discharge Summaries
患者退院サマリー

A hospital needs AI to generate discharge summaries from patient records. Anonymized records remove patient identifiers — but discharge summaries must reference real patient names, medications, and attending physicians to be clinically useful.
病院が患者記録からAIで退院サマリーを生成する必要があります。匿名化された記録は患者識別子を削除しますが、退院サマリーは臨床的に有用であるために実際の患者名、投薬、担当医を参照する必要があります。

LLM Capsule encapsulates patient records, AI generates structured summaries, and local restoration restores all patient identifiers into the discharge documents. The summaries are clinically ready without any manual re-identification.
LLM Capsuleは患者記録をカプセル化し、AIが構造化されたサマリーを生成し、ローカル復元がすべての患者識別子を退院文書に復元します。サマリーは手動の再識別なしに臨床的に使用可能な状態です。

## Section 08: FAQ

What is the difference between anonymization and restoration?
匿名化と復元の違いは何ですか？

Anonymization permanently removes identifying data. Local restoration (restoration) temporarily protects data through reversible encapsulation and automatically restores original values in AI outputs.
匿名化は識別データを永久的に削除します。ローカル復元（復元）は可逆的カプセル化によりデータを一時的に保護し、AI出力内の元の値を自動的に復元します。

When should I use anonymization vs local restoration?
匿名化とローカル復元のどちらを使用すべきですか？

Use anonymization for research datasets and analytics where individual identity is not needed. Use local restoration (LLM Capsule) for production AI workflows where outputs must reference real enterprise data.
個人の身元が不要な研究データセットや分析には匿名化を使用してください。出力が実際のエンタープライズデータを参照する必要がある本番AIワークフローにはローカル復元（LLM Capsule）を使用してください。

## Section 09: Related Pages

Related
関連ページ

Product Overview
製品概要

Architecture
アーキテクチャ

Trust & Compliance
トラスト＆コンプライアンス

Request a Demo
デモをリクエスト

Learn Hub
ラーンハブ

## Section 10: CTA Band

See how LLM Capsule works with your data
LLM Capsuleがお客様のデータでどのように機能するかをご覧ください

Bring your documents, deployment constraints, and evaluation criteria. We demonstrate on your actual workflows.
お客様のドキュメント、デプロイ要件、評価基準をお持ちください。実際のワークフローでデモンストレーションいたします。

Request a Demo
デモをリクエスト

AWS Marketplace
AWS Marketplace
