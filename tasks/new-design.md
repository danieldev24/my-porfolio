# Implementation Plan: Editorial Technical Portfolio

**Status:** Complete on `feature/new-design`.

## Mục tiêu

Thiết kế lại portfolio theo tinh thần editorial/technical dossier lấy cảm hứng từ
nikospasion.com, nhưng sử dụng nội dung, hình ảnh, màu nhấn và interaction riêng
của Hoàng Sơn. Giữ nguyên Next.js 12, React 17, Chakra UI và Framer Motion để
giảm rủi ro; không nâng framework trong phạm vi redesign.

## Quyết định kiến trúc

- Dùng Chakra color mode làm nguồn trạng thái theme duy nhất; CSS variables chỉ
  biểu diễn design tokens.
- Dùng CSS Modules cho grid, paper texture, hairline và responsive shell; dùng
  Chakra cho semantics, focus state và component primitives.
- Dùng Framer Motion đang có sẵn; không thêm animation dependency.
- Giữ nội dung portfolio trong một config có type để các section không hard-code
  dữ liệu.
- Không sao chép logo, nội dung, ảnh, artwork DESCENT hoặc asset của website tham
  chiếu.
- Hai breakpoint chính: desktop rail tại `>= 1024px`, mobile/tablet header bên
  dưới `1024px`; kiểm tra thêm viewport 390px.

## Phase 1: Visual foundation

### Task 1: Dựng shell và hero đầu tiên

**Mô tả:** Thay layout homepage hiện tại bằng một lát hoàn chỉnh gồm paper
background, desktop rail placeholder, content column và hero mang thương hiệu
Hoàng Sơn. Đây là proof-of-direction trước khi xây các section còn lại.

- Acceptance:
  - Desktop có rail 176px, content tối đa khoảng 624px và không clone asset gốc.
  - Mobile 390px dùng header gọn, một cột và không có horizontal overflow.
  - OpenGraph metadata, favicon và CV hiện tại vẫn hoạt động.
- Verify:
  - `npx --yes --package=node@18 node node_modules/next/dist/bin/next build`
  - Browser check tại 1280×720 và 390×844.
- Dependencies: None
- Files likely touched:
  - `pages/index.tsx`
  - `config/theme.ts`
  - `styles/globals.css`
  - `components/NewDesign/PortfolioShell.tsx`
  - `components/NewDesign/portfolio.module.css`
- Estimated scope: M

### Task 2: Hoàn thiện navigation và theme control

**Mô tả:** Biến rail placeholder thành navigation có section index, social
links và theme selector; mobile dùng top bar với menu có thể điều khiển bằng bàn
phím.

- Acceptance:
  - Anchor navigation đưa focus/scroll đúng đến từng section.
  - Light, dark và system mode có trạng thái rõ ràng, đủ contrast.
  - Mobile menu có accessible name, focus-visible và đóng bằng Escape.
- Verify:
  - Keyboard-only check cho rail, theme selector và mobile menu.
  - `npm run lint` và build bằng Node 18.
- Dependencies: Task 1
- Files likely touched:
  - `components/NewDesign/PortfolioShell.tsx`
  - `components/NewDesign/NavigationRail.tsx`
  - `components/NewDesign/MobileHeader.tsx`
  - `components/NewDesign/portfolio.module.css`
- Estimated scope: M

### Task 3: Thêm profile và experience slice

**Mô tả:** Đưa nội dung About và Experience hiện có vào cấu trúc editorial mới,
bao gồm eyebrow mono, statement lớn, timeline công việc và link CV/contact.

- Acceptance:
  - Nội dung cá nhân lấy từ repo hiện tại và không còn phụ thuộc component cũ.
  - Timeline đọc đúng thứ tự, có company, role, thời gian và mô tả ngắn.
  - Email, social links và CV mở đúng đích.
- Verify:
  - Manual content/link check trên desktop và mobile.
  - Build bằng Node 18 không có TypeScript error.
- Dependencies: Task 1
- Files likely touched:
  - `config/portfolio.ts`
  - `components/NewDesign/ProfileIntro.tsx`
  - `components/NewDesign/ExperienceIndex.tsx`
  - `pages/index.tsx`
  - `components/NewDesign/portfolio.module.css`
- Estimated scope: M

## Checkpoint 1: Direction review

- [x] Homepage shell, hero, navigation, theme, profile và experience chạy end-to-end.
- [x] Worktree chỉ chứa thay đổi thuộc redesign.
- [x] Visual direction được xác nhận bằng browser checkpoint trước khi mở rộng.

## Phase 2: Portfolio content

### Task 4: Xây project showcase

**Mô tả:** Chuyển Featured Works thành grid card editorial sử dụng project và
ảnh hiện có, với tags, mô tả ngắn và trạng thái hover/focus nhất quán.

- Acceptance:
  - Desktop hiển thị hai cột; mobile hiển thị một cột không cắt nội dung.
  - Card dùng ảnh riêng trong `public/works`, alt text có ý nghĩa và link hợp lệ.
  - Hover và keyboard focus truyền đạt cùng một thông tin.
- Verify:
  - Browser check card grid tại 1280px, 768px và 390px.
  - Kiểm tra toàn bộ project links và image requests.
- Dependencies: Tasks 1, 3
- Files likely touched:
  - `config/portfolio.ts`
  - `components/NewDesign/ProjectGrid.tsx`
  - `components/NewDesign/ProjectCard.tsx`
  - `pages/index.tsx`
  - `components/NewDesign/portfolio.module.css`
- Estimated scope: M

### Task 5: Xây writing index

**Mô tả:** Trình bày bài Dev.to như một index gọn, giữ static generation nhưng
có empty/error fallback để homepage không hỏng khi API bên ngoài không phản hồi.

- Acceptance:
  - Hiển thị title, ngày và link cho các bài viết hợp lệ.
  - API rỗng hoặc lỗi vẫn render section fallback có chủ đích.
  - Không đưa dữ liệu API chưa validate trực tiếp vào UI.
- Verify:
  - Build bình thường và build với response rỗng/mocked failure.
  - Kiểm tra link bài viết mở đúng trang Dev.to.
- Dependencies: Task 1
- Files likely touched:
  - `types/article.ts`
  - `lib/articles.ts`
  - `components/NewDesign/WritingIndex.tsx`
  - `pages/index.tsx`
  - `components/NewDesign/portfolio.module.css`
- Estimated scope: M

### Task 6: Tạo signature section riêng

**Mô tả:** Thêm một section có cá tính riêng thay cho việc copy bookshelf hoặc
“in the bag”, ưu tiên concept “Mobile Craft Kit” thể hiện Android, Compose,
Kotlin Multiplatform và các công cụ thiết kế đang sử dụng.

- Acceptance:
  - Section dùng nội dung và visual riêng của Hoàng Sơn.
  - Item có trạng thái hover, focus và tap; không phụ thuộc hover để đọc nội dung.
  - Interaction hoạt động khi reduced motion được bật.
- Verify:
  - Keyboard, touch-size và reduced-motion check.
  - Build bằng Node 18 không có warning mới do section này.
- Dependencies: Tasks 1, 3
- Files likely touched:
  - `config/portfolio.ts`
  - `components/NewDesign/CraftKit.tsx`
  - `pages/index.tsx`
  - `components/NewDesign/portfolio.module.css`
- Estimated scope: M

### Task 7: Hoàn thiện contact và footer

**Mô tả:** Kết thúc hành trình bằng CTA liên hệ, social index, timezone và footer
dạng technical metadata, chỉ dùng dữ liệu thật của chủ portfolio.

- Acceptance:
  - Email, LinkedIn, GitHub và CV có label rõ, URL chính xác.
  - Footer responsive, không lặp navigation thừa trên mobile.
  - Không hiển thị tọa độ hoặc thông tin vị trí nhạy cảm.
- Verify:
  - Manual link check và keyboard focus order.
  - Browser check tại desktop và mobile.
- Dependencies: Tasks 2, 3
- Files likely touched:
  - `config/portfolio.ts`
  - `components/NewDesign/ContactFooter.tsx`
  - `pages/index.tsx`
  - `components/NewDesign/portfolio.module.css`
- Estimated scope: S

## Checkpoint 2: Content complete

- [x] Profile, experience, projects, writing, craft kit và contact đều render.
- [x] Mỗi section có heading semantic và anchor ổn định.
- [x] Build hoàn tất khi Dev.to API không khả dụng.

## Phase 3: Motion and quality

### Task 8: Thêm motion và dither treatment

**Mô tả:** Bổ sung word-cycle ở hero, reveal khi section vào viewport, project
micro-interaction và visual dither tự tạo; giữ motion ngắn và có mục đích.

- Acceptance:
  - Transition dùng hai nhịp chính khoảng 150ms và 300ms.
  - `prefers-reduced-motion` tắt reveal, word-cycle và transform không cần thiết.
  - Không copy dither image, ticket artwork hoặc animation sequence từ trang gốc.
- Verify:
  - So sánh normal motion với reduced-motion.
  - Kiểm tra console không có hydration hoặc animation warning.
- Dependencies: Tasks 1, 4, 6
- Files likely touched:
  - `config/animations.ts`
  - `components/NewDesign/HeroWordCycle.tsx`
  - `components/NewDesign/DitherVisual.tsx`
  - `components/NewDesign/portfolio.module.css`
- Estimated scope: M

### Task 9: Audit responsive và accessibility

**Mô tả:** Chạy pass cuối cho layout, semantics, performance và code cleanup;
không xóa component cũ cho tới khi homepage mới đã được duyệt.

- Acceptance:
  - Không horizontal overflow tại 390, 768, 1024 và 1280px.
  - Có skip link, đúng heading order, alt text, focus-visible và contrast cơ bản.
  - Không có console error, broken asset hoặc network request không cần thiết.
- Verify:
  - `npm run lint`
  - `npx --yes --package=node@18 node node_modules/next/dist/bin/next build`
  - Browser smoke test light/dark tại desktop/mobile.
- Dependencies: Tasks 1–8
- Files likely touched:
  - `pages/index.tsx`
  - `pages/_document.tsx`
  - `styles/globals.css`
  - `components/NewDesign/portfolio.module.css`
- Estimated scope: M

## Checkpoint 3: Final review

- [x] Tất cả acceptance criteria đã được kiểm tra.
- [x] Desktop, mobile, light mode và dark mode đã được browser audit.
- [x] Mỗi task được commit riêng; branch sẵn sàng review.
- [x] Component cũ được giữ nguyên để cleanup trong task riêng sau review.

## Rủi ro

| Rủi ro | Mức độ | Giảm thiểu |
|---|---|---|
| Next.js 12 không chạy với Node 26 | Cao | Dùng Node 18 cho dev/build; xử lý nâng cấp framework ở task riêng |
| Dev.to API làm build không ổn định | Trung bình | Validate response và có static fallback |
| Visual quá giống website tham chiếu | Trung bình | Dùng nội dung, asset, accent và signature section riêng |
| Dither/motion gây chậm mobile | Trung bình | CSS/SVG nhẹ, reduced motion, test viewport 390px |
| Component cũ và mới cùng tồn tại | Thấp | Chưa xóa trong redesign; cleanup sau approval |

## Ngoài phạm vi MVP

- Nâng Next.js/React/Chakra lên major version mới.
- Tạo các route About, Writing, Projects riêng.
- CMS, analytics, deployment hoặc migration hosting.
- Sao chép artwork hoặc asset từ website tham chiếu.
