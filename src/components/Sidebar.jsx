import { useState } from "react";
import "./Sidebar.css";

function Sidebar({
  history,
  memoryList,
  onHistoryClick,
  onMemoryClear,
  onMemoryRecall,
}) {
  const [activeTab, setActiveTab] = useState("history");

  return (
    <div className="sidebar">
      <div className="sidebar-tabs">
        <button
          className={`tab-button ${activeTab === "history" ? "active" : ""}`}
          onClick={() => setActiveTab("history")}
        >
          History
        </button>
        <button
          className={`tab-button ${activeTab === "memory" ? "active" : ""}`}
          onClick={() => setActiveTab("memory")}
        >
          Memory
        </button>
      </div>

      <div className="sidebar-content">
        {activeTab === "history" ? (
          <div className="history-panel">
            {history.length === 0 ? (
              <div className="empty-state">
                <p>There's no history yet</p>
              </div>
            ) : (
              <div className="history-list">
                {history.map((item, index) => (
                  <div
                    key={index}
                    className="history-item"
                    onClick={() => onHistoryClick(item.result)}
                  >
                    <div className="history-expression">{item.expression}</div>
                    <div className="history-result">{item.result}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="memory-panel">
            {memoryList.length === 0 ? (
              <div className="empty-state">
                <p>There's nothing saved in memory</p>
              </div>
            ) : (
              <div className="memory-list">
                {memoryList.map((item, index) => (
                  <div key={index} className="memory-item">
                    <div className="memory-value">{item.value}</div>
                    <div className="memory-actions">
                      <button
                        className="memory-action-btn"
                        onClick={() => onMemoryRecall(item.value)}
                        title="Recall"
                      >
                        MR
                      </button>
                      <button
                        className="memory-action-btn"
                        onClick={() => onMemoryClear(index)}
                        title="Clear"
                      >
                        MC
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
