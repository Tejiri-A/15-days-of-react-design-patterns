# Day 01: Product List Challenge 🛒

A feature-rich, responsive product listing application built for the **React Design Patterns Challenge**. This project demonstrates the usage of the **Container/Presenter pattern** to maintain a clean separation between business logic and UI.

## ✨ Features

- **Dynamic Data Fetching**: Retrieves a product catalog from a remote API using `axios`.
- **Advanced Filtering**: Categorized selection allowing users to filter products by their specific category.
- **Multimodal Sorting**: 
  - Alphabetical: Name (A-Z) and (Z-A).
  - Numerical: Price (Lowest to Highest) and (Highest to Lowest).
- **Interactive Cart Management**: 
  - Add items to the cart.
  - Remove items from the cart.
  - Real-time cart summary recalculation.
- **Robust User Experience**:
  - **Loading Skeletons**: Powered by DaisyUI to handle asynchronous states gracefully.
  - **Error Handling**: Friendly alerts to communicate fetch failures.
  - **Responsive Layout**: Fluid design that adapts from mobile to desktop.

## 🏗️ Architecture: The Container/Presenter Pattern

To ensure code maintainability, the project is structured into two main layers:

### 1. The Container (`ProductsListContainer.tsx`)
This component acts as the "Brains" of the feature. It manages:
- **State Management**: Using `useState` and `useEffect` for data, loading, and selection states.
- **Business Logic**: Methods for handling product sorting, filtering, and API communication.
- **Immutable Operations**: Ensuring all data transformations (like sorting and filtering) are done on copies of the data, preventing side-effects.

### 2. The Presenter (`ProductsListPresenter.tsx`)
This component is purely "Visual." It focuses on:
- **Layout Orchestration**: Organizing where sub-components like `SortFilterControls`, `ProductsList`, and `CartSummary` live on the screen.
- **Props-based Rendering**: Receiving data and callbacks from the container and passing them down to atomic components.

## 🛠️ Tech Stack

- **Framework**: React 18
- **Language**: TypeScript (with strict types for EventHandlers and Sort modes)
- **Styling**: Tailwind CSS & DaisyUI
- **Data Fetching**: Axios
- **Performance**: Optimized category extraction using `useMemo` ($O(N)$ with Maps).

## 🚀 Getting Started

### Prerequisites
Ensure you have the API server running (usually in the `fake-apis` directory).

### Installation
1. Install dependencies:
   ```bash
   pnpm install
   ```
2. Start the development server:
   ```bash
   pnpm dev
   ```

## 🧠 Lessons Learned & Refactorings
- **Immutability in React**: Using `[...array].sort()` instead of `.sort()` to avoid accidental mutation of state.
- **Type Safety**: Leveraging TypeScript generics `<HTMLSelectElement>` for React `ChangeEvent` to avoid `Property 'value' does not exist` errors.
- **Controlled Inputs**: Implementing the "single source of truth" for the sorting dropdown value.
