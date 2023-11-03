import { View, Text } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import styles from './style';
import { getVersions } from '../../services/api';
import { getData, setData } from '../../services/localStorage';
import { VersionContext } from '../../contexts/version';

export default function Settings() {
  const [versions, setVersions] = useState([]);
  const [version, setVersion] = useState('nvi');
  const versionContext = useContext(VersionContext);

  const getAllVersions = async () => {
    try {
      const versionRequest = await getVersions();
      const versionData = versionRequest.data;
      setVersions(versionData);
    } catch (error) {
      console.error(error);
    }
  }

  const change = (e) => {
    const value = e.target.value;
    setVersion(value);
    setData('version', value);
    versionContext.setVersion(value);
  }

  const setCurrentVersion = async () => {
    const value = await getData('version') || 'nvi';
    setVersion(value);
    setData('version', value);
  }

  useEffect(() => {
    getAllVersions();
    setCurrentVersion();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configurar Versão</Text>
      <View style={styles.selectContainer}>
          <select style={styles.select} onChange={change} value={version}>
            {
              versions.map(v => {
                return (
                <option value={v.version} style={styles.option} key={v.version}>
                  {v.version}
                </option>)
              }) 
            }
          </select>
      </View>
    </View>
  )
}