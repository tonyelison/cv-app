const renderSectionObject = (sectionData, buildSection) => Object.keys(sectionData).map((key) => buildSection(key, sectionData));

const renderSection = (sectionData, buildSection) => {
  return Array.isArray(sectionData) ? sectionData.map((item) => renderSection(item, buildSection)) : renderSectionObject(sectionData, buildSection);
};

export default renderSection;