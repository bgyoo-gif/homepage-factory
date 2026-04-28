# Architecture Page — 日本語翻訳

## Section 01: Hero

AI Enablement
AI活性化

Architecture
アーキテクチャ

LLM Capsule is an AI enablement data layer and plugin that enables enterprises to adopt any AI model safely. It sits between enterprise data systems and external AI services — protecting data in transit while unlocking the full power of AI across every workflow.
LLM Capsuleは、企業があらゆるAIモデルを安全に導入できるようにするデータレイヤーおよびプラグインです。企業データシステムと外部AIサービスの間に位置し、転送中のデータを保護しながら、すべてのワークフローでAIの潜在能力を最大限に引き出します。

## Section 02: Architecture Overview

Architecture
アーキテクチャ

Overview
概要

LLM Capsule operates as an AI enablement data layer that encapsulates sensitive enterprise data locally, transmits only protected representations to any external AI service, and restores AI outputs within the enterprise environment — enabling safe AI adoption at scale.
LLM Capsuleは、機密性の高い企業データをローカルでカプセル化し、保護された表現のみを外部AIサービスに送信し、企業環境内でAI出力を復元するデータレイヤーとして動作します — 大規模なAI導入を安全に実現します。

## Section 03: Architecture Components

Architecture
アーキテクチャ

Components
コンポーネント

Encapsulation Engine
カプセル化エンジン

Local Encapsulation Engine
ローカルカプセル化エンジン

The encapsulation engine operates entirely within the enterprise environment. It detects sensitive elements using context-aware data control, replaces them with structure-preserving representations, and stores the mapping locally. The mapping never leaves the enterprise boundary.
カプセル化エンジンは企業環境内で完全に動作します。コンテキスト認識データ制御により機密要素を検出し、構造保存型の表現に置換した後、マッピングをローカルに保存します。マッピングは企業の境界外に出ることはありません。

Policy Control
ポリシー制御

Policy Control Layer
ポリシー制御レイヤー

Enterprise context control enables organizations to define sensitivity policies beyond standard PII detection. Sensitivity classification adapts to document type, department, workflow context, and regulatory requirements. Administrators configure policies through the admin console.
エンタープライズコンテキスト制御により、標準的なPII検出を超える機密性ポリシーを組織が独自に定義できます。機密性分類は文書タイプ、部門、ワークフローコンテキスト、規制要件に応じて自動的に適用されます。管理者は管理コンソールからポリシーを設定します。

Capsule Transmission
カプセル送信

Outbound Capsule Transmission
アウトバウンドカプセル送信

Only encapsulated documents cross the trust boundary. The AI provider receives structurally complete documents with protected values — useful for AI processing but opaque to the receiving service. Zero exposure of original sensitive data.
カプセル化された文書のみが信頼境界を越えます。AIプロバイダーは構造的に完全でありながら保護された値を含む文書を受信します — AI処理には有用ですが、受信側サービスには不透明です。元の機密データはZero Exposureです。

Restoration Engine
復元エンジン

Local Restoration Engine
ローカル復元エンジン

After AI processing completes, the restoration engine applies the locally stored mapping to AI outputs. Original names, figures, dates, and references are restored automatically. Restored outputs are directly usable in enterprise workflows.
AI処理が完了すると、復元エンジンがローカルに保存されたマッピングをAI出力に適用します。元の名前、数値、日付、参照情報が自動的に復元されます。復元された出力は企業ワークフローで直接使用できます。

Audit & Compliance
監査 & コンプライアンス

Audit & Compliance Layer
監査 & コンプライアンスレイヤー

Every encapsulation and restoration event is logged with complete audit trails. Organizations can track what data was protected, when, by whom, and which AI services processed it. Audit data supports enterprise AI governance and regulatory compliance requirements.
すべてのカプセル化および復元イベントは完全な監査証跡とともに記録されます。どのデータが保護されたか、いつ、誰が、どのAIサービスが処理したかを追跡できます。監査データは企業AIガバナンスと規制コンプライアンス要件をサポートします。

## Section 04: Deployment Options

Deployment
デプロイメント

Options
オプション

LLM Capsule enables AI anywhere your infrastructure runs. The encapsulation and restoration logic is identical regardless of deployment model — so you can adopt AI across every environment.
LLM Capsuleは、インフラストラクチャが稼働する場所であればどこでもAIを利用可能にします。カプセル化と復元のロジックはデプロイメントモデルに関係なく同一です — あらゆる環境でAIを導入できます。

On-Premise
オンプレミス

Full deployment within the enterprise data center. Sensitive data never traverses any network boundary. Operates within existing security perimeters.
企業データセンター内での完全デプロイメントです。機密データはネットワーク境界を越えることはありません。既存のセキュリティ境界内で運用されます。

Air-Gapped
エアギャップ

For the most sensitive environments. Encapsulation on the isolated network, controlled transfer to AI-connected environment, results transferred back for local restoration.
最も機密性の高い環境向けのデプロイメント方式です。隔離されたネットワーク上でカプセル化を行い、AI接続環境への制御された転送を実施し、結果をローカルに戻して復元します。

Cloud (AWS Marketplace)
クラウド（AWS Marketplace）

Runs within the enterprise's AWS account or VPC. Data remains within the enterprise's cloud boundary. Available on AWS Marketplace for streamlined procurement.
企業のAWSアカウントまたはVPC内で実行されます。データは企業のクラウド境界内に保持されます。AWS Marketplaceから簡便に調達できます。

View on AWS Marketplace
AWS Marketplaceで確認する

Hybrid
ハイブリッド

Different document types or sensitivity levels route through different deployment modes within a single LLM Capsule instance. Maximum flexibility.
文書タイプや機密性レベルに応じて、単一のLLM Capsuleインスタンス内で異なるデプロイメントモードにルーティングされます。最大限の柔軟性を提供します。

Embedded Integration
エンベデッド統合

LLM Capsule embedded into existing enterprise applications and platforms, operating as an AI enablement data layer within your software stack.
LLM Capsuleを既存の企業アプリケーションおよびプラットフォームに組み込み、ソフトウェアスタック内のデータレイヤーとして動作させます。

Slack App
Slack App

Use LLM Capsule directly within Slack. Encapsulate sensitive messages and documents before sending to AI assistants, with results restored in-channel.
Slack内で直接LLM Capsuleを使用します。AIアシスタントに送信する前に機密メッセージと文書をカプセル化し、結果はチャネル内で復元されます。

## Section 05: CTA

See how
ご確認ください

works with your data
が貴社のデータでどのように動作するか

Bring your documents, deployment constraints, and evaluation criteria. We demonstrate on your actual workflows.
貴社の文書、デプロイメント要件、評価基準をお持ちください。実際のワークフロー上で直接デモンストレーションいたします。

Request a Demo
デモのご依頼

Available on AWS Marketplace
AWS Marketplaceで確認する
