# Structure-Preserving Document Processing — 日本語翻訳

## Section 01: Hero

Structure-Preserving Document Processing
構造保持文書処理

Why maintaining document structure during data protection is critical for accurate AI outputs in enterprise workflows.
データ保護中に文書構造を維持することが、企業ワークフローにおける正確なAI出力にとってなぜ重要なのかを説明します。

## Section 02: Problem

Enterprise documents are not flat text. They contain tables, nested sections, cross-references, entity relationships, and formatting that carries semantic meaning. When flat masking tools process these documents, they treat every sensitive value identically — replacing it with a generic token regardless of its structural role.
企業文書は単純なテキストではありません。テーブル、ネストされたセクション、相互参照、エンティティ関係、意味を伝える書式設定が含まれています。フラットマスキングツールがこれらの文書を処理する場合、すべての機密値を同一に扱い、構造的な役割に関係なく汎用トークンに置き換えます。

A customer name in a table header serves a different function than the same name in a paragraph. A date in a contract preamble has different significance than a date in a payment schedule. Flat masking collapses these distinctions, degrading AI output quality.
テーブルヘッダーにある顧客名は、段落内の同じ名前とは異なる機能を果たします。契約書前文の日付は、支払スケジュールの日付とは異なる意味を持ちます。フラットマスキングはこれらの区別を崩壊させ、AI出力の品質を低下させます。

## Section 03: Definition

DEFINITION — Structure-Preserving Processing
定義 — 構造保持処理

Structure-preserving processing is a data protection method that replaces sensitive elements while maintaining the document's layout, entity relationships, table structures, and semantic context. It ensures AI models receive structurally intact documents that support accurate summarization, extraction, and analysis.
構造保持処理は、文書のレイアウト、エンティティ関係、テーブル構造、意味的コンテキストを維持しながら機密要素を置き換えるデータ保護手法です。AIモデルが正確な要約、抽出、分析をサポートする構造的に完全な文書を受け取ることを保証します。

## Section 04: Explanation

Structure-preserving processing operates at multiple document layers:
構造保持処理は複数の文書レイヤーで動作します。

Layout preservation. Table structures, column headers, row relationships, and nested sections are maintained. AI models can accurately extract tabular data because the schema remains intact.
レイアウト保持。テーブル構造、列ヘッダー、行の関係、ネストされたセクションが維持されます。スキーマが完全に維持されるため、AIモデルはテーブルデータを正確に抽出できます。

Entity consistency. When the same entity appears multiple times in a document, all instances are mapped to the same replacement. AI models can track entity references across sections — "the Borrower" in clause 1 refers to the same encapsulated entity in clause 7.
エンティティの一貫性。同一のエンティティが文書内に複数回出現する場合、すべてのインスタンスが同じ置き換え値にマッピングされます。AIモデルはセクション間のエンティティ参照を追跡できます — 第1条の「借主」は第7条の同じカプセル化エンティティを参照します。

Semantic context. Context-aware data control distinguishes between sensitive data that must be protected and contextual information that AI needs for comprehension. Job titles, section headers, and document type indicators remain readable.
意味的コンテキスト。コンテキスト認識型データ制御が、保護すべき機密データとAIが理解に必要なコンテキスト情報を区別します。役職名、セクションヘッダー、文書タイプインジケーターは読み取り可能な状態を維持します。

Cross-document consistency. When processing document sets — such as a contract and its amendments — entity mappings remain consistent across files, enabling AI to perform accurate cross-document analysis.
文書間の一貫性。契約書とその修正書など文書セットを処理する際、エンティティマッピングがファイル間で一貫して維持され、AIが正確な文書横断分析を実行できます。

## Section 05: Enterprise Example

Financial Statement Analysis
財務諸表分析

An audit firm needs AI to compare quarterly financial statements across 15 portfolio companies. Each statement contains tabular data with company names, executive names, account numbers, and financial figures.
監査法人がAIを使用して15社のポートフォリオ企業の四半期財務諸表を比較する必要があります。各財務諸表には、企業名、役員名、口座番号、財務数値を含むテーブルデータがあります。

Structure-preserving processing maintains all table structures and entity relationships. AI performs comparative analysis across the protected statements. Local restoration restores the real company data, producing analyst-ready comparison reports.
構造保持処理がすべてのテーブル構造とエンティティ関係を維持します。AIが保護された財務諸表に対して比較分析を実行します。ローカル復元が実際の企業データを復元し、アナリストが即座に利用可能な比較レポートを生成します。

## Section 06: FAQ

What is structure-preserving processing?
構造保持処理とは何ですか？

Structure-preserving processing is a data protection method that replaces sensitive elements while maintaining document layout, entity relationships, table structures, and semantic context so AI models can process the document accurately.
構造保持処理は、AIモデルが文書を正確に処理できるよう、文書レイアウト、エンティティ関係、テーブル構造、意味的コンテキストを維持しながら機密要素を置き換えるデータ保護手法です。

How does it differ from flat masking?
フラットマスキングとはどのように異なりますか？

Flat masking treats every sensitive value identically, replacing it with a generic token regardless of context. Structure-preserving processing maintains semantic relationships, entity consistency, and document layout during protection.
フラットマスキングはコンテキストに関係なくすべての機密値を同一に扱い、汎用トークンに置き換えます。構造保持処理は、保護過程で意味的関係、エンティティの一貫性、文書レイアウトを維持します。

## Section 07: Related

Product Overview
製品概要

Architecture
アーキテクチャ

Trust & Compliance
信頼性とコンプライアンス

Request a Demo
デモのご依頼

Structure-Preserving vs Flat Masking
構造保持処理 vs フラットマスキング

## Section 08: CTA Band

See how LLM Capsule works with your data
LLM Capsuleが貴社のデータとどのように連携するかご確認ください

Bring your documents, deployment constraints, and evaluation criteria. We demonstrate on your actual workflows.
文書、デプロイメント要件、評価基準をお持ちください。貴社の実際のワークフローでデモンストレーションいたします。

Request a Demo
デモのご依頼

AWS Marketplace
AWS Marketplace
