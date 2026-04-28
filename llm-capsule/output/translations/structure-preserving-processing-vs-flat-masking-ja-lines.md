# Structure-Preserving Processing vs Flat Masking — 日本語翻訳

## Section 01: Hero

Structure-Preserving Processing vs Flat Masking
構造保持処理 vs フラットマスキング

Compare structure-preserving processing with flat masking for enterprise AI. Flat masking collapses document structure; structure preservation maintains integrity for accurate AI outputs.
エンタープライズAIにおける構造保持処理とフラットマスキングを比較します。フラットマスキングは文書構造を崩壊させ、構造保持は正確なAI出力のために整合性を維持します。

## Section 02: Overview

Flat masking and structure-preserving processing both aim to protect sensitive data before AI processing. They differ fundamentally in how they handle document structure, entity relationships, and semantic context — and this difference determines whether AI outputs are usable.
フラットマスキングと構造保持処理はいずれもAI処理前の機密データ保護を目的としています。文書構造、エンティティ関係、意味的コンテキストの処理方法が根本的に異なり、この違いがAI出力の使用可能性を決定します。

## Section 03: How Flat Masking Works

Flat masking scans documents for sensitive patterns and replaces each match with a generic token. The replacement is uniform — every name becomes [NAME], every number becomes [NUMBER], every date becomes [DATE]. The masking engine treats each sensitive value independently, without considering its role in the document's structure.
フラットマスキングは文書内の機密パターンをスキャンし、各一致箇所を汎用トークンに置き換えます。置き換えは一律です — すべての名前は[NAME]に、すべての数値は[NUMBER]に、すべての日付は[DATE]になります。マスキングエンジンは、文書構造における役割を考慮せずに、各機密値を独立して処理します。

## Section 04: Limitations

Entity collapse. In a multi-party contract, all party names become [NAME]. AI cannot distinguish acquirer from target, lender from borrower, plaintiff from defendant.
エンティティの崩壊。多当事者契約において、すべての当事者名が[NAME]になります。AIは取得者と対象、貸主と借主、原告と被告を区別できません。

Table destruction. Column headers masked as [FIELD] and cell values masked as [VALUE] eliminate the schema information AI needs for accurate extraction.
テーブルの破壊。[FIELD]としてマスキングされた列ヘッダーと[VALUE]としてマスキングされたセル値は、AIが正確な抽出に必要なスキーマ情報を除去します。

Cross-reference breakage. When a document references entities across sections, flat masking breaks these connections by assigning different tokens to the same entity.
相互参照の破壊。文書がセクション間でエンティティを参照する場合、フラットマスキングは同一エンティティに異なるトークンを割り当てることでこれらの接続を破壊します。

Inconsistent replacement. The same entity may receive different tokens in different document locations, breaking AI's ability to track entities across sections.
不一致な置き換え。同一エンティティが文書の異なる場所で異なるトークンを受け取る可能性があり、セクション間でエンティティを追跡するAIの能力が損なわれます。

## Section 05: How LLM Capsule Differs

Structure-preserving processing maintains document integrity during data protection. Entity consistency is enforced across the entire document. Table structures, cross-references, and semantic relationships are preserved. AI receives a structurally complete document that supports accurate processing.
構造保持処理はデータ保護中の文書整合性を維持します。文書全体にわたってエンティティの一貫性が適用されます。テーブル構造、相互参照、意味的関係が保持されます。AIは正確な処理をサポートする構造的に完全な文書を受け取ります。

AI results are automatically restored locally with original enterprise data. LLM Capsule's AI enablement data layer protects sensitive data while preserving the document structure AI needs for accurate outputs.
AI結果は元の企業データとともにローカルで自動的に復元されます。LLM CapsuleのAIイネーブルメントデータレイヤーは、正確な出力のためにAIが必要とする文書構造を保持しながら、機密データを保護します。

## Section 06: Enterprise Workflow Example

Multi-Party Financial Analysis
多当事者金融分析

An investment bank analyzes term sheets involving three parties — lead investor, co-investor, and target company. Each term sheet contains overlapping entity names in different roles.
投資銀行が3つの当事者 — リードインベスター、共同投資者、対象企業 — が関与するタームシートを分析します。各タームシートには、異なる役割で重複するエンティティ名が含まれています。

Flat masking turns all three parties into [NAME], making it impossible for AI to attribute terms to the correct party. Structure-preserving processing assigns consistent, distinct representations to each party, enabling accurate extraction of party-specific terms. Restoration restores real party names in the analysis output.
フラットマスキングは3つの当事者すべてを[NAME]に変換し、AIが条件を正しい当事者に帰属させることを不可能にします。構造保持処理は各当事者に一貫した固有の表現を割り当て、当事者固有の条件の正確な抽出を可能にします。復元が分析出力において実際の当事者名を復元します。

## Section 07: FAQ

What is the main difference between flat masking and structure-preserving processing?
フラットマスキングと構造保持処理の主な違いは何ですか？

Flat masking treats every sensitive value independently, collapsing entity relationships and document structure. Structure-preserving processing maintains entity consistency, table schemas, and semantic relationships throughout the document.
フラットマスキングはすべての機密値を独立して処理し、エンティティ関係と文書構造を崩壊させます。構造保持処理は文書全体にわたってエンティティの一貫性、テーブルスキーマ、意味的関係を維持します。

## Section 08: CTA

See how LLM Capsule works with your data
LLM Capsuleが貴社のデータとどのように連携するかご確認ください

Bring your documents, deployment constraints, and evaluation criteria. We demonstrate on your actual workflows.
文書、デプロイメント要件、評価基準をお持ちください。貴社の実際のワークフローでデモンストレーションいたします。

Request a Demo
デモのご依頼

AWS Marketplace
AWS Marketplace
