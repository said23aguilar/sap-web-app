import { useState } from "react";
import styles from './selectAvatar.module.css';
import authStyles from '@/app/(auth)/auth.module.css';
import Image from "next/image";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function SelectAvatar() {
  const [value, setValue] = useState('');
  const [showOptions, setShowOptions] = useState(false);

  const handleInputClick = (e: React.ChangeEvent<any>) => {
    setShowOptions(!showOptions);
  }

  const handleOptionClick = (e: React.ChangeEvent<any>, value: string) => {
    setValue(value);
  }

  return (
    <>
      <label className={`${authStyles.label} ${styles.labelSelect}`}>
        Avatar
        <input
          className={`${authStyles.input} ${styles.selectAvatar}${showOptions ? ' ' + styles.selectAvatarActive : ''}`}
          type='text'
          name='avatar'
          readOnly
          required
          value={value}
          onClick={handleInputClick}
        />
        <div className={styles.selectedAvatarImg}>
          {
            value === 'Avatar 1' ?
              <Image src='/avatar/avatar1.png' alt='Avatar 1' width={40} height={40} />
              : (value === 'Avatar 2' ?
                <Image src='/avatar/avatar2.png' alt='Avatar 2' width={40} height={40} />
                : (value === 'Avatar 3' ?
                  <Image src='/avatar/avatar3.png' alt='Avatar 3' width={40} height={40} />
                  : null
                )
              )
          }
        </div>
        <ChevronDownIcon className={`${styles.selectIcon}${showOptions ? ' ' + styles.selectIconShow : ''}`} />
        <ul className={`${styles.selectAvatarOptions}${showOptions ? ' ' + styles.selectAvatarOptionsShow : ''}`}>
          <li
            className={styles.selectAvatarOption}
            onClick={(e) => handleOptionClick(e, 'Avatar 1')}
          >
            <Image src='/avatar/avatar1.png' alt='Avatar 1' width={50} height={50} />
            Avatar 1
          </li>
          <li
            className={styles.selectAvatarOption}
            onClick={(e) => handleOptionClick(e, 'Avatar 2')}
          >
            <Image src='/avatar/avatar2.png' alt='Avatar 2' width={50} height={50} />
            Avatar 2
          </li>
          <li
            className={styles.selectAvatarOption}
            onClick={(e) => handleOptionClick(e, 'Avatar 3')}
          >
            <Image src='/avatar/avatar3.png' alt='Avatar 3' width={50} height={50} />
            Avatar 3
          </li>
        </ul>
      </label>
    </>
  );
}