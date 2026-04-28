# On-Premise vs Cloud AI Data Protection — 日本語翻訳

## Section 01: Hero

On-Premise vs Cloud AI Data Protection
オンプレミス vs クラウドAIデータ保護

Comparing deployment models for enterprise AI data protection — on-premise, air-gapped, cloud, hybrid, and embedded options.
エンタープライズAIデータ保護のデプロイモデルを比較 — オンプレミス、エアギャップ、クラウド、ハイブリッド、エンベデッドの各オプション。

Learn
ラーニング

## Section 02: Problem

Problem
課題

Enterprises operate in different infrastructure environments. Defense and intelligence agencies require air-gapped deployments. Financial institutions may mandate on-premise data processing. Cloud-native organizations want SaaS-based solutions. Many enterprises operate hybrid environments where different data types require different deployment models.
企業はさまざまなインフラ環境で運営されています。防衛・情報機関はエアギャップデプロイを必要とします。金融機関はオンプレミスでのデータ処理を義務付ける場合があります。クラウドネイティブ組織はSaaSベースのソリューションを求めています。多くの企業は、異なるデータタイプに異なるデプロイモデルが必要なハイブリッド環境で運営しています。

AI data protection must adapt to the enterprise's infrastructure requirements, not force infrastructure changes.
AIデータ保護は、インフラの変更を強制するのではなく、企業のインフラ要件に適応する必要があります。

## Section 03: Explanation

Explanation
解説

On-premise deployment.
オンプレミスデプロイ。

The encapsulation engine runs entirely within the enterprise data center. Sensitive data never traverses any network boundary. The AI enablement data layer operates within existing security perimeters. Only encapsulated data is sent to external AI services when needed.
カプセル化エンジンは、企業データセンター内で完全に実行されます。機密データはいかなるネットワーク境界も通過しません。AI活用データレイヤーは、既存のセキュリティ境界内で動作します。必要に応じて、カプセル化されたデータのみが外部AIサービスに送信されます。

Air-gapped deployment.
エアギャップデプロイ。

For the most sensitive environments, LLM Capsule can operate within air-gapped networks. Documents are encapsulated locally, transferred to an AI-connected environment through controlled channels, processed, and results are transferred back for local restoration.
最も機密性の高い環境向けに、LLM Capsuleはエアギャップネットワーク内で動作できます。文書はローカルでカプセル化され、管理されたチャネルを通じてAI接続環境に転送されて処理され、結果がローカル復元のために戻されます。

Cloud deployment.
クラウドデプロイ。

Available on AWS Marketplace. The encapsulation layer runs within the enterprise's cloud account or VPC. Data remains within the enterprise's cloud boundary while AI services are accessed externally.
AWS Marketplaceで利用可能です。カプセル化レイヤーは企業のクラウドアカウントまたはVPC内で実行されます。AIサービスへの外部アクセス中も、データは企業のクラウド境界内に留まります。

Hybrid deployment.
ハイブリッドデプロイ。

Different document types or sensitivity levels route through different deployment modes within a single LLM Capsule instance.
単一のLLM Capsuleインスタンス内で、異なる文書タイプまたは機密レベルが異なるデプロイモードを通じてルーティングされます。

Embedded integration.
エンベデッド統合。

LLM Capsule can be embedded into existing enterprise applications and platforms, operating as an AI enablement data layer within the enterprise's own software stack.
LLM Capsuleは既存のエンタープライズアプリケーションやプラットフォームに組み込むことができ、企業自体のソフトウェアスタック内でAI活用データレイヤーとして動作します。

One enablement model, any deployment. The encapsulation and restoration logic is identical regardless of where LLM Capsule runs. AI results are restored locally in every deployment scenario.
1つの活用モデル、あらゆるデプロイ。カプセル化と復元のロジックは、LLM Capsuleの実行場所に関係なく同一です。AI結果はすべてのデプロイシナリオでローカルに復元されます。

## Section 04: Enterprise Example

Enterprise Example
エンタープライズ適用事例

Government Agency — Air-Gapped Deployment
政府機関 — エアギャップデプロイ

A government agency needs AI to process classified briefing documents for automated summarization. The classified network has no external connectivity.
政府機関が、機密ブリーフィング文書の自動要約処理にAIを必要としています。機密ネットワークには外部接続がありません。

LLM Capsule encapsulates documents on the classified network. Encapsulated data is transferred to the AI-connected environment through an approved data diode. AI generates summaries. Results are transferred back and restored on the classified network, producing classified-ready summaries.
LLM Capsuleが機密ネットワーク上で文書をカプセル化します。カプセル化されたデータは、承認されたデータダイオードを通じてAI接続環境に転送されます。AIが要約を生成します。結果は機密ネットワークに戻されて復元され、機密対応の要約が生成されます。

## Section 05: FAQ

Does LLM Capsule work on-premise?
LLM Capsuleはオンプレミスで動作しますか？

Yes. LLM Capsule supports on-premise, air-gapped, cloud, hybrid, and embedded deployment models. The encapsulation engine runs entirely within your environment regardless of deployment type.
はい。LLM Capsuleはオンプレミス、エアギャップ、クラウド、ハイブリッド、エンベデッドのデプロイモデルをサポートしています。カプセル化エンジンは、デプロイタイプに関係なくお客様の環境内で完全に実行されます。

Is LLM Capsule available on AWS Marketplace?
LLM CapsuleはAWS Marketplaceで利用可能ですか？

Yes. LLM Capsule is available on AWS Marketplace for cloud deployment within your AWS account.
はい。LLM Capsuleは、お客様のAWSアカウント内でのクラウドデプロイ用にAWS Marketplaceで利用可能です。

## Section 06: Related Pages

Related
関連ページ

Product Overview
製品概要

Architecture
アーキテクチャ

Trust & Compliance
信頼性とコンプライアンス

Request a Demo
デモのご依頼

## Section 07: CTA Band

See how LLM Capsule works with your data
LLM Capsuleがお客様のデータとどのように連携するかをご確認ください

Bring your documents, deployment constraints, and evaluation criteria. We demonstrate on your actual workflows.
文書、デプロイ要件、評価基準をお持ちください。お客様の実際のワークフローでデモンストレーションいたします。

Request a Demo
デモのご依頼

AWS Marketplace
AWS Marketplace
